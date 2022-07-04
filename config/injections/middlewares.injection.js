const { asValue } = require('awilix');
const authMiddleware = require('../../api/middlewares/auth.middlewares');

module.exports = (container) => {
    container.register({
        authMiddleware: asValue(authMiddleware),
    })

    return container;

}