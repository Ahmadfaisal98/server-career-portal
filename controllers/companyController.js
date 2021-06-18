const { Company, History } = require("../models/index");
let companyLogo = "";

class CompanyController {
  static companyGet(req, res, next) {
    Company.findAll({
      order: [["id", "ASC"]],
    })
      .then((company) => {
        res.status(200).json({ company });
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static companyGetOne(req, res, next) {
    Company.findByPk(req.params.id)
      .then((company) => {
        if (company) {
          res.status(200).json({ company });
        } else {
          next({ statusCode: 404, message: "Not Found" });
        }
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static companyPost(req, res, next) {
    const { name, location, email, description } = req.body;
    let companyData;
    if (req.urlImage) {
      companyLogo = req.urlImage;
    } else {
      companyLogo = "";
    }
    Company.create({ name, companyLogo, location, email, description })
      .then((company) => {
        companyData = company;
        return History.create({
          entityId: company.id,
          title: name,
          description: `Company with id ${company.id} created`,
          updatedBy: req.user.email,
        });
      })
      .then((history) => {
        res.status(201).json({ company: companyData });
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          next({ statusCode: 400, message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
  static companyPut(req, res, next) {
    if (req.urlImage) {
      companyLogo = req.urlImage;
    } else {
      companyLogo = "";
    }
    const { name, location, email, description } = req.body;
    Company.update(
      { name, companyLogo, location, email, description },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((company) => {
        if (company[0]) {
          return History.create({
            entityId: req.params.id,
            title: name,
            description: `Company with id ${req.params.id} updated`,
            updatedBy: req.user.email,
          });
        } else {
          next({ statusCode: 404 });
        }
      })
      .then((history) => {
        res.status(200).json({ company: req.body });
      })
      .catch((err) => {
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          next({ statusCode: 400, message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
  static companyDelete(req, res, next) {
    let entity;
    let companyName;
    Company.findByPk(req.params.id)
      .then((company) => {
        entity = company;
        companyName = company.name;
        return Company.destroy({
          where: {
            id: req.params.id,
          },
        });
      })
      .then((company) => {
        if (entity) {
          return History.create({
            entityId: req.params.id,
            title: companyName,
            description: `Company with id ${req.params.id} permanently deleted`,
            updatedBy: req.user.email,
          });
        } else {
          next({ statusCode: 404 });
        }
      })
      .then((history) => {
        res.status(200).json({ message: `${entity.name} success to delete` });
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
}

module.exports = CompanyController;
