'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipopago', [
      {
        id: 1,
        nombre: 'Efectivo'
      },
      {
        id: 2,
        nombre: 'Debito'
      },
      {
        id: 3,
        nombre: 'Credito'
      },
      {
        id: 4,
        nombre: 'Cheque'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tipopago', null, {})
  }
}
