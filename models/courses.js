"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Courses extends Model {}
  Courses.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description required",
          },
        },
      },
      estimatedTime: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      materialsNeeded: DataTypes.STRING,
      // userId: DataTypes.NUMBER,
    },
    {
      sequelize,
      modelName: "Courses",
    }
  );
  //Model Associations
  // Courses.associate = (models) => {
  //   Courses.belongsTo(models.Users, { foreignKey: "userId" });
  // };
  return Courses;
};
