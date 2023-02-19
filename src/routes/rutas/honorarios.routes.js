const { Router } = require('express')

module.exports = function ({ HonorariosController }) {
  const router = Router()

  router.get('/', HonorariosController.TraerTodos.bind(HonorariosController))
  router.get('/buscar/:id', HonorariosController.BuscarID.bind(HonorariosController))
  router.post('/', HonorariosController.Crear.bind(HonorariosController))
  router.delete('/:id', HonorariosController.Eliminar.bind(HonorariosController))
  router.put('/actualizar/:id', HonorariosController.Modificar.bind(HonorariosController))
  router.get('/mes/:id', HonorariosController.BuscarMes.bind(HonorariosController))
  router.get('/usuario/:id', HonorariosController.BuscarUsuario.bind(HonorariosController))
  router.get('/fecha/', HonorariosController.BuscarPorfecha.bind(HonorariosController))
  return router
}
