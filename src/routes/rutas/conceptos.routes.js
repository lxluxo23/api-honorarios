const { Router } = require('express')

module.exports = function ({ ConceptosController }) {
  const router = Router()

  router.get('/', ConceptosController.TraerTodos.bind(ConceptosController))
  router.get('/buscar/:id', ConceptosController.BuscarID.bind(ConceptosController))
  router.post('/', ConceptosController.Crear.bind(ConceptosController))
  router.delete('/:id', ConceptosController.Eliminar.bind(ConceptosController))
  router.put('/actulizar/:id', ConceptosController.Modificar.bind(ConceptosController))

  return router
}
