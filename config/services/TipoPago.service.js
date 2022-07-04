class TipoPagoService {

    constructor({ db }) {
        this.db = db;
    }


    async ObtenerTodos() {

        return this.db.tipopago.findAll({
            raw: true,
            nest: true,
        });
    }
    async Crear(entity) {

        console.log(entity);
        return await this.db.tipopago.create(entity);

    }
}

module.exports = TipoPagoService


