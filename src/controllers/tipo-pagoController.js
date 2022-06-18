class TipoPagoController {
    async Inicio(req, res) {
        return res.status(200).send({ success: true, data: "oli" });
    };
}
module.exports = TipoPagoController;