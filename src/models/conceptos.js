"use strict";
module.exports = (sequelize, DataTypes) => {
  const conceptos = sequelize.define(
    "conceptos",
    {
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
      },
      nombre:{
        type:DataTypes.STRING,
        allowNull:false,
      }
    },
    {
      tableName:"conceptos",
      timestamps: true
    }
  );

  return conceptos;
};

