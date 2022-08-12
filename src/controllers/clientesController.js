class ClientesController {

    constructor({ ClienteService }) {
        this.servicio = ClienteService
    }
    async TraerTodos(req, res) {

        var datos = await this.servicio.ObtenerTodos();
        return res.status(200).send(datos);

    };

    async BuscarID(req, res){
        try {
            const { id } = req.params;
            var datos = await this.servicio.BuscarID(id);
            if (datos!=undefined){
                return res.status(200).send(datos);
            }
            else{
                return res.status(500).send({ success: false, msg: "Error, no hay datos" });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).send({ success: false, msg: "Error en el servidor"});
        }
    }
    async Crear(req, res) {

        const body = req.body;
        await this.servicio.Crear(body).then(() => {
            return res.status(200).send({ success: true, msg: "Creado Exitosamente " });
        }).catch(err => {
            console.error(err);
            return res.status(500).send({ success: false, msg: "Error, no es posible guardar los datos" });
        });
    };
    async Eliminar(req, res) {

        try {
            const { id } = req.params;
            await this.servicio.Eliminar(id);
            return res.status(200).send({ success: true, msg: `ELIMINADO EXITOSAMENTE` });

        } catch (error) {

            return res.status(500).send({ success: false, msg: error.message });
        }
    }
}
module.exports = ClientesController; 