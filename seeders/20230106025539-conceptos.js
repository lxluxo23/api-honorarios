'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('conceptos', [
      {
        id: 1,
        nombre: 'Imposiciones'
      },
      {
        id: 2,
        nombre: 'Pago en efectivo'

      },
      {
        id: 3,
        nombre: 'Pago'

      },
      {
        id: 4,
        nombre: 'Timbraje'

      },
      {
        id: 5,
        nombre: 'rents'

      },
      {
        id: 6,
        nombre: 'iva'

      },
      {
        id: 7,
        nombre: 'deuda'

      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('conceptos', null, {})
  }
}
