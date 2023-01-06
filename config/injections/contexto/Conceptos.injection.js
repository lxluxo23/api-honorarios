
const { asClass, asFunction } = require('awilix')
const { ConceptosController } = require('../../../src/controllers')
const { ConceptosRoute } = require('../../../src/routes/rutas')
const { ConceptoService } = require('../../../src/services/')
module.exports = (container) => {
  container.register({
    ConceptosRoute: asFunction(ConceptosRoute).singleton(),
    ConceptoService: asClass(ConceptoService).singleton(),
    ConceptosController: asClass(ConceptosController).singleton()
  })

  return container
}
