const { asClass, asFunction } = require('awilix')
const { TipoPagoController } = require('../../../src/controllers')
const { TipoPagoRoute } = require('../../../src/routes/rutas')

module.exports = (container) => {

    container.register({
        TipoPagoRoute: asFunction(TipoPagoRoute).singleton(),
        //TipoPagoRepository: asClass(AdelantoRepository).singleton(),
        TipoPagoController: asClass(TipoPagoController).singleton(),
    })

    return container
}