class TipoPagoService {
  constructor ({ db }) {
    this.db = db
  }

  async ObtenerTodos () {
    return this.db.tipopago.findAll({
      raw: true,
      nest: true
    })
  }

  async BuscarID (id) {
    return this.db.tipopago.findOne({
      where: {
        id
      },
      raw: true,
      nest: true
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  async Crear (entity) {
    return await this.db.tipopago.create(entity)
  }

  async Eliminar (id) {
    return this.db.tipopago.destroy({
      where: {
        id
      }
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }
}

module.exports = TipoPagoService
