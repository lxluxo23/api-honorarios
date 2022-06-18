const { Router } = require("express");

module.exports = function({ TipoPagoController }) {
    const router = Router();

    router.get("/", TipoPagoController.Inicio.bind(TipoPagoController));

    return router;
};