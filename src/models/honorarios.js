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
      id_concepto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
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

  honorarios.associate = function (models) {
    honorarios.belongsTo(models.clientes, {
      uniqueKey: 'fk_clientes',
      foreignKey: 'id_cliente',
      as: 'Cliente'
    })
    honorarios.belongsTo(models.conceptos, {
      uniqueKey: 'fk_conceptos',
      foreignKey: 'id_concepto',
      as: 'Concepto'
    })
  }
  return honorarios
}
