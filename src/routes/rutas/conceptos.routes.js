const { Router } = require("express");

module.exports = function({ ConceptosController }) {
    const router = Router();

    router.get("/", ConceptosController.TraerTodos.bind(ConceptosController));
    router.post("/", ConceptosController.Crear.bind(ConceptosController));
    router.delete("/:id", ConceptosController.Eliminar.bind(ConceptosController));

    return router;
};