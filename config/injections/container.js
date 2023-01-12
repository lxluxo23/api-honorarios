const { createContainer, asFunction, asValue } = require('awilix')

const config = require('../environments')

// routes
const Routes = require('../../src/routes/')

// db

const db = require('../../src/models')
let container = createContainer()

container
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
    db: asValue(db)
  })

container = require('./contexto/TipoPago.injection')(container)
container = require('./contexto/Clientes.injection')(container)
container = require('./contexto/Conceptos.injection')(container)
container = require('./contexto/Honorarios.injection')(container)
module.exports = container
