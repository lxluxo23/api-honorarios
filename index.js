const express = require("express");
const container = require('./config/injections/container');
const config = container.resolve("config");
const Routes = container.resolve("router");
var morgan = require('morgan');
const clc = require('cli-color');
const figlet = require('figlet');
const db = container.resolve("db");
var os = require("os");
var nucleos = os.cpus().length;
var MemoriaDisponible = ((os.freemem())/1048576);
/*
    # 
    #   cluster
    #   
*/
const cluster = require('cluster');

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

if (cluster.isMaster) {
   
    console.log(clc.bgGreen('Iniciando Cluster | nucleos disponibles: ' + nucleos + ' nucleos | pid maestro: ' + process.pid));
    console.log(clc.green("Memoria disponible: "),clc.bgRed(MemoriaDisponible,'MB de ram') )
    console.log(clc.greenBright.bold("Aplicacion corriendo en el puerto ", config.PORT));
    db.sequelize.sync({ alter: true, force: false, logging: false })
    .then(() => {
        console.log(clc.greenBright(figlet.textSync('Tablas sincronizadas', {
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        })));
    })
    .catch((err) => {
        console.error(clc.bold.redBright("ERROR AL CONECTAR A LA BASE DE DATOS"));
        console.error((clc.bold.red(err)));

    });

    //el segundo parametro van la cantidad de nucleos 
    for (var i = 0; i < 4; i++) {
        cluster.fork();
    }
    cluster.on('online', function(worker) {
        console.log(clc.magenta('Sub proceso | pid: ' + worker.process.pid) + clc.greenBright('  online'));
    });
    cluster.on('exit', function(worker, code, signal) {
        console.log('Sub proceso | pid: ' + worker.process.pid + ' se murio por el codigo: ' + code + ', y señal : ' + signal);
        console.log('Iniciando nuevo subproceso');
        cluster.fork();
    });
} else {
    var app = express();
    app.use(morganMiddleware);
    app.use(morgan('combined'));
    app.use(Routes)
    app.listen(config.PORT, () => {})

}
