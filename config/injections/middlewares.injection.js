const { asValue } = require('awilix');
const authMiddleware = require('../../api/middlewares/auth.middlewares');
const {
    SubirContratos,
    SubirCartas,
    SubirFiniquitos,
    SubirLiquidaciones,
    SubirTransferencias,
    SubirLicencia,
    SubirVacacion,
    SubirImplementos,
    SubirUniforme,
    SubirPrestamo,
} = require('../../api/middlewares/update.middlewares');


module.exports = (container) => {
    container.register({

        authMiddleware: asValue(authMiddleware),
        SubirContratos: asValue(SubirContratos),
        SubirCartas: asValue(SubirCartas),
        SubirFiniquitos: asValue(SubirFiniquitos),
        SubirLiquidaciones: asValue(SubirLiquidaciones),
        SubirTransferencias: asValue(SubirTransferencias),
        SubirLicencia: asValue(SubirLicencia),
        SubirVacacion: asValue(SubirVacacion),
        SubirImplementos: asValue(SubirImplementos),
        SubirUniforme: asValue(SubirUniforme),
        SubirPrestamo: asValue(SubirPrestamo)
    })

    return container;

}