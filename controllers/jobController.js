const { Job, Company, User, History } = require("../models");

class JobController {
  static jobGet(req, res, next) {
    Job.findAll({
      include: [Company, User],
      order: [["id", "ASC"]],
    })
      .then((job) => {
        job.forEach((e) => {
          delete e.User.dataValues.password;
        });
        res.status(200).json({ job, userRole: req.user.role, userEmail: req.user.email });
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static jobGetOne(req, res, next) {
    let id = +req.params.id;
    Job.findByPk(id, {
      include: [Company, User],
    })
      .then((job) => {
        if (job) {
          res.status(200).json({ job });
        } else {
          next({ statusCode: 404 });
        }
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static jobPost(req, res, next) {
    let authorId = req.user.id;
    const { title, description, companyId, jobType } = req.body;
    let jobData;
    Job.create({ title, description, companyId, authorId, jobType })
      .then((job) => {
        jobData = job;
        return History.create({
          entityId: job.id,
          title: title,
          description: `Job with id ${job.id} created`,
          updatedBy: req.user.email,
        });
      })
      .then((history) => {
        res.status(201).json({ job: jobData });
      })
      .catch((err) => {
        console.log(err);
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          next({ statusCode: 400, message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
  static jobPut(req, res, next) {
    const { title, description, companyId, authorId, jobType } = req.body;
    Job.update(
      { title, description, companyId, authorId, jobType },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((job) => {
        if (job[0]) {
          return History.create({
            entityId: req.params.id,
            title: title,
            description: `Job with id ${req.params.id} updated`,
            updatedBy: req.user.email,
          });
        } else {
          next({ statusCode: 404 });
        }
      })
      .then((history) => {
        res.status(200).json({ job: req.body });
      })
      .catch((err) => {
        console.log(err, "dari jobController");
        if (err.name === "SequelizeUniqueConstraintError" || err.name === "SequelizeValidationError") {
          err = err.errors.map((e) => e.message);
          next({ statusCode: 400, message: err });
        } else {
          next({ statusCode: 500 });
        }
      });
  }
  static jobDelete(req, res, next) {
    let entity;
    let title;
    Job.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((job) => {
        entity = job;
        title = job.title;
        return Job.destroy({
          where: {
            id: req.params.id,
          },
        });
      })
      .then((job) => {
        if (entity) {
          return History.create({
            entityId: req.params.id,
            title: title,
            description: `Job with id ${req.params.id} permanently deleted`,
            updatedBy: req.user.email,
          });
        } else {
          next({ statusCode: 404 });
        }
      })
      .then((history) => {
        res.status(200).json({ message: `${entity.title} success to delete` });
      })
      .catch((err) => {
        next({ statusCode: 500 });
      });
  }
  static jobPatch(req, res, next) {
    const { status } = req.body;
    let title;
    let statusBefore;
    console.log(req.user.role, "user");
    Job.findByPk(req.params.id)
      .then((job) => {
        title = job.title;
        statusBefore = job.status;
        return Job.update(
          { status },
          {
            where: {
              id: req.params.id,
            },
          }
        );
      })
      .then((job) => {
        if (job[0]) {
          return History.create({
            entityId: req.params.id,
            title: title,
            description: `Job with id ${req.params.id} status has been updated from ${statusBefore} to ${status}`,
            updatedBy: req.user.email,
          });
        } else {
          next({ statusCode: 404 });
        }
      })
      .then((history) => {
        res.status(200).json({ history: `Job with id ${req.params.id} status has been updated from ${statusBefore} to ${status}` });
      })
      .catch((err) => {
        console.log(err);
        next({ statusCode: 500 });
      });
  }
}

module.exports = JobController;
