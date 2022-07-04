const { Router } = require("express");

module.exports = function({ TipoPagoController }) {
    const router = Router();

    router.get("/", TipoPagoController.TraerTodos.bind(TipoPagoController));
    router.post("/", TipoPagoController.Crear.bind(TipoPagoController));
    return router;
};