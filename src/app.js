import express from "express";
import morgan from "morgan";
const clc = require('cli-color');
const morganMiddleware = morgan(function(tokens, req, res) {
    return [
        clc.red('servidor 😘  -->'),
        clc.blue(tokens.method(req, res)),
        clc.yellow('IP: ' + tokens['remote-addr'](req, res)),
        clc.cyan(tokens.url(req, res)),
        clc.greenBright('desde ' + tokens.referrer(req, res)),
        clc.yellow(tokens.status(req, res)),
        clc.magenta(tokens['response-time'](req, res) + ' ms'),
        clc.white('Fecha: ' + tokens.date(req, res)),
        clc.red('Cliente: ' + tokens['user-agent'](req, res)),
    ].join(' ');
});
const app = express();


//configuraciones del servidor

app.set("port", 3000);


// middlewares

app.use(morganMiddleware); //morgan para ver las solicitudes

export default app;