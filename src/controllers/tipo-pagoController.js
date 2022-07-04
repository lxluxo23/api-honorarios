class TipoPagoController {

    constructor({ TipoPagoService }) {
        this.servicio = TipoPagoService
    }
    async TraerTodos(req, res) {

        var datos = await this.servicio.ObtenerTodos();
        return res.status(200).send(datos);

    };
    async Crear(req, res) {

        const body = req.body;

        console.table(body);
        await this.servicio.Crear(body).then(() => {
            return res.status(200).send({ success: true, msg: "Creado Exitosamente " });
        }).catch(err => {
            console.error(err);
            return res.status(500).send({ success: false, msg: "Error, no es posible guardar los datos" });
        });
    };
}
module.exports = TipoPagoController; 