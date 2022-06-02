import app from "./app";
const clc = require('cli-color');
const main = () => {
    app.listen(app.get('port'));
    console.log(clc.greenBright.bold("Aplicacion corriendo en el puerto " + +app.get("port")));
}

main();