const { Router } = require("express");

module.exports = function({ ClientesController }) {
    const router = Router();

    router.get("/", ClientesController.TraerTodos.bind(ClientesController));
    router.get("/buscar/:id", ClientesController.BuscarID.bind(ClientesController));
    router.post("/", ClientesController.Crear.bind(ClientesController));
    router.delete("/:id", ClientesController.Eliminar.bind(ClientesController));

    return router;
};