"use strict";
module.exports = (sequelize, DataTypes) => {
  const clientes = sequelize.define(
    "clientes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rut: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
    },
    {
      tableName:"clientes",
      timestamps: true
    }
  );

  return clientes;
};

