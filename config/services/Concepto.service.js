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
}

module.exports = ConceptoService
