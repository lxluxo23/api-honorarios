
const { asClass, asFunction } = require('awilix')
const { ClientesController } = require('../../../src/controllers')
const { ClientesRoute } = require('../../../src/routes/rutas')
const { ClienteService } = require('../../../src/services/')
module.exports = (container) => {
  container.register({
    ClientesRoute: asFunction(ClientesRoute).singleton(),
    ClienteService: asClass(ClienteService).singleton(),
    ClientesController: asClass(ClientesController).singleton()
  })

  return container
}
