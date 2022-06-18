const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function({
    TipoPagoRoute,
}) {

    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoute.use("/tipopago", TipoPagoRoute);


    //ruta padre
    router.use("/api", apiRoute);

    return router;

}