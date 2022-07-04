"use strict";
module.exports = (sequelize, DataTypes) => {
  const tipopago = sequelize.define(
    "tipo-pago",
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
  );

  return tipopago;
};
