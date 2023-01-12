
const { asClass, asFunction } = require('awilix')
const { HonorariosController } = require('../../../src/controllers')
const { HonorariosRoute } = require('../../../src/routes/rutas')
const { HonorariosService } = require('../../../src/services')
module.exports = (container) => {
  container.register({
    HonorariosRoute: asFunction(HonorariosRoute).singleton(),
    HonorariosService: asClass(HonorariosService).singleton(),
    HonorariosController: asClass(HonorariosController).singleton()
  })

  return container
}
