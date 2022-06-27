class TipoPagoController {

    constructor({TipoPagoService}){
        this.servicio = TipoPagoService
    }
    async Inicio(req, res) {

        var datos = await this.servicio.ObtenerTodos();
        return res.status(200).send(datos);

    };
}
module.exports = TipoPagoController;