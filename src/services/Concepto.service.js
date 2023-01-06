class ConceptoService {
  constructor ({ db }) {
    this.db = db
  }

  async ObtenerTodos () {
    return this.db.conceptos.findAll({
      raw: true,
      nest: true
    })
  }

  async BuscarID (id) {
    return this.db.conceptos.findOne({
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
    return await this.db.conceptos.create(entity)
  }

  async Eliminar (id) {
    return this.db.conceptos.destroy({
      where: {
        id
      }
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  async Actualizar (id, body) {
    return await this.db.conceptos.update(body, {
      where: {
        id
      }
    }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }
}

module.exports = ConceptoService
