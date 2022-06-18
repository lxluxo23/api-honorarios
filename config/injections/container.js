const { asClass, createContainer, asFunction, asValue } = require("awilix");

const config = require('../environments');

//routes
const Routes = require("../../src/routes/");

//db


let container = createContainer();

container
    .register({
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    });

container = require('./contexto/TipoPago.injection')(container);
module.exports = container;