"use strict";
module.exports = (sequelize, DataTypes) => {
  const tipopago = sequelize.define(
    "tipopago",
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
      tableName:"tipopago",
      timestamps: true
    }
  );

  return tipopago;
};
