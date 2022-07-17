class ClienteService {

    constructor({ db }) {
        this.db = db;
    }
    async ObtenerTodos() {

        return this.db.clientes.findAll({
            raw: true,
            nest: true,
        });
    }
    async Crear(entity) {

        return await this.db.clientes.create(entity);

    }
    async Eliminar(id) {
        return this.db.clientes.destroy({
            where: {
                id: id
            }
        }).catch((err) => {
            throw new Error(err.errors[0].message || err.message);
        });
    }
}

module.exports = ClienteService


