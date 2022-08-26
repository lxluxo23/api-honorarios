const { asClass, asFunction } = require('awilix')
const { TipoPagoController } = require('../../../src/controllers')
const { TipoPagoRoute } = require('../../../src/routes/rutas')
const { TipoPagoService } = require('../../services')
module.exports = (container) => {
  container.register({
    TipoPagoRoute: asFunction(TipoPagoRoute).singleton(),
    TipoPagoService: asClass(TipoPagoService).singleton(),
    TipoPagoController: asClass(TipoPagoController).singleton()
  })

  return container
}
