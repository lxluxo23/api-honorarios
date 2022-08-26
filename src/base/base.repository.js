/* eslint-disable eqeqeq */

class BaseRepository {
  constructor (db, entity) {
    this._db = db
    this.entity = entity
  }

  async getAll () {
    return await this._db[this.entity].findAll({ raw: true, nest: true }).then(data => {
      if (data.length == 0) throw new Error('No hay registros')
      return data
    }).catch((err) => {
      throw new Error(err.message[0].message || err.message)
    })
  }

  get (id) {
    return this._db[this.entity].findOne({ raw: true, nest: true, where: { id } }).then((data) => {
      if (!data) throw new Error('No hay registro')
      return data
    }).catch((err) => {
      throw new Error(err.message[0].message || err.message)
    })
  }

  create (entity) {
    return this._db[this.entity].create(entity).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  update (id, entity) {
    delete entity.createdAt
    return this._db[this.entity].update(entity, { where: { id } }).catch((err) => {
      throw new Error(err.errors[0].message || err.message)
    })
  }

  delete (id) {
    return this._db[this.entity].destroy({ where: { id } })
  }
}

module.exports = BaseRepository
