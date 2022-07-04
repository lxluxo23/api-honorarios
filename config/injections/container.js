const { asClass, createContainer, asFunction, asValue } = require("awilix");

const config = require('../environments');

//routes
const Routes = require("../../src/routes/");

//db

const db = require("../../src/models");
let container = createContainer();

container
    .register({
        router: asFunction(Routes).singleton(),
        config: asValue(config),
        db: asValue(db)
    });

container = require('./contexto/TipoPago.injection')(container);
module.exports = container;