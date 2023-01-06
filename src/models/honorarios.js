'use strict'

module.exports = (sequelize, DataTypes) => {
  const honorarios = sequelize.define(
    'honorarios',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      numero_boleta: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fecha_boleta: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fecha_anulacion: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      pagado: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      fecha_pago: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      numero_comprobante: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    },
    {
      tableName: 'honorarios',
      timestamps: true
    }
  )

  return honorarios
}
