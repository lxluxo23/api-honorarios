const { Op } = require('sequelize')
class HonorariosService {
  constructor ({ db }) {
    this.db = db
  }

  async ObtenerTodos () {
    return this.db.honorarios.findAll({
      include: [
        { model: this.db.clientes, as: 'Cliente' },
        { model: this.db.conceptos, as: 'Concepto' }
      ],
      raw: true,
      nest: true
    })
  }

  async ObtenerPorMes (mes) {
    const ano = new Date().getFullYear()
    // const fechaInicio = moment(`2023-${mes}-01 00:00:00`).format('YYYY-MM-DD HH:mm:ss')
    // const fechaFin = moment('2023-02-01 00:00:00').format('YYYY-MM-DD HH:mm:ss')
    // console.log(fechaInicio + ' ' + fechaFin)
    const fechaInicio = new Date(`${ano}-${mes}-01 00:00:00`)
    const fechaFin = new Date(`${ano}-${mes}-31 00:00:00`)
    return this.db.honorarios.findAll({
      include: [
        { model: this.db.clientes, as: 'Cliente' },
        { model: this.db.conceptos, as: 'Concepto' }
      ],
      where: {
        createdAt: {
          [Op.between]: [
            fechaInicio,
            fechaFin
          ]
        }
      }
    })
  }

  async ObtenerPorFecha (fecha) {
    return this.db.honorarios.findAll({
      include: [
        { model: this.db.clientes, as: 'Cliente' },
        { model: this.db.conceptos, as: 'Concepto' }
      ],
      where: {
        createdAt: {
          [Op.between]: [
            fecha,
            fecha
          ]
        }
      }
    })
  }

  async BuscarID (id) {
    return this.db.honorarios.findOne({
      include: [
        { model: this.db.clientes, as: 'Cliente' },
        { model: this.db.conceptos, as: 'Concepto' }
      ],
      where: {
        id
      },
      raw: true,
      nest: true
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  async BuscarUsuario (id) {
    return this.db.honorarios.findAll({
      include: [
        { model: this.db.clientes, as: 'Cliente' },
        { model: this.db.conceptos, as: 'Concepto' }
      ],
      where: {
        id_cliente: id
      },
      raw: true,
      nest: true
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  async Crear (entity) {
    return await this.db.honorarios.create(entity)
  }

  async Eliminar (id) {
    return this.db.honorarios.destroy({
      where: {
        id
      }
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  async Actualizar (id, body) {
    return await this.db.honorarios.update(body, {
      where: {
        id
      }
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }
}

module.exports = HonorariosService
