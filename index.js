/* eslint-disable no-undef */
const express = require('express')
const chalkAnimation = require('chalk-animation')
const morgan = require('morgan')
const clc = require('cli-color')
const figlet = require('figlet')
// eslint-disable-next-line no-unused-vars
const inquirer = require('inquirer')
require('dotenv').config()

const os = require('os')
const MemoriaDisponible = ((os.freemem()) / 1048576)

const { NODE_ENV } = process.env
let entorno = false
/*
    #
    #   cluster
    #

*/

const morganMiddleware = morgan(function (tokens, req, res) {
  return [
    clc.red('servidor 😘  -->'),
    clc.blue(tokens.method(req, res)),
    clc.yellow('IP: ' + tokens['remote-addr'](req, res)),
    clc.cyan(tokens.url(req, res)),
    clc.greenBright('desde ' + tokens.referrer(req, res)),
    clc.yellow(tokens.status(req, res)),
    clc.magenta(tokens['response-time'](req, res) + ' ms'),
    clc.white('Fecha: ' + tokens.date(req, res)),
    clc.red('Cliente: ' + tokens['user-agent'](req, res))
  ].join(' ')
})
console.clear()
if (NODE_ENV === 'production' || NODE_ENV === 'development') {
  console.log('hay enviroment')
  entorno = true
} else {
  entorno = false
  console.log('no hay enviroment')
}

// if (entorno == false) {
//     async function preguntas(){
//         respuesta = await  inquirer.prompt([
//             {
//                 type: "list",
//                 name: "entorno",
//                 message: "que entorno usar ?",
//                 choices: ["development", "production"],
//             },
//         ])
//         if (respuesta.entorno != undefined){
//             console.log(respuesta.entorno)
//             process.env.NODE_ENV = respuesta.entorno
//             entorno = true
//         }
//     }

//     preguntas()

// }
if (entorno === true) {
  const container = require('./config/injections/container')
  const config = container.resolve('config')
  const Routes = container.resolve('router')
  const db = container.resolve('db')
  console.log(clc.green('Memoria disponible: '), clc.bgRed(MemoriaDisponible, 'MB de ram'))
  console.log(clc.greenBright.bold('Aplicacion corriendo en el puerto ', config.PORT))
  const animacion = chalkAnimation.karaoke('SINCRONIZANDO BASE DE DATOS.')
  animacion.start()
  db.sequelize.sync({ alter: true, force: false, logging: false })
    .then(() => {
      console.clear()
      console.log(clc.greenBright(figlet.textSync('Tablas sincronizadas', {
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 80,
        whitespaceBreak: true
      })))
    })
    .catch((err) => {
      console.error(clc.bold.redBright('ERROR AL CONECTAR A LA BASE DE DATOS'))
      console.error((clc.bold.red(err)))
    })
  const app = express()
  app.use(morganMiddleware)
  app.use(morgan('combined'))
  app.use(Routes)
  app.listen(config.PORT, () => { })
}
