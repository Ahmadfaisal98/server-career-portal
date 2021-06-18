"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Job.belongsTo(models.User, { foreignKey: "authorId" });
      Job.belongsTo(models.Company, { foreignKey: "companyId" });
    }
  }
  Job.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Title cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Description cannot be empty",
          },
        },
      },
      companyId: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: "Company cannot be empty",
          },
        },
      },
      authorId: DataTypes.INTEGER,
      jobType: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Job type cannot be empty",
          },
        },
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  Job.beforeCreate((instance) => {
    instance.status = "active";
  });
  return Job;
};
