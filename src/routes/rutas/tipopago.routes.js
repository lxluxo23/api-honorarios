const { Router } = require('express')

module.exports = function ({ TipoPagoController }) {
  const router = Router()

  router.get('/', TipoPagoController.TraerTodos.bind(TipoPagoController))
  router.post('/', TipoPagoController.Crear.bind(TipoPagoController))
  router.delete('/:id', TipoPagoController.Eliminar.bind(TipoPagoController))

  return router
}
