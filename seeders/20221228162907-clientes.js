'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        id: 1,
        nombre: 'ELBA DEL CARMEN DE JONGH BRAVO',
        rut: '3009572-3'
      },
      {
        id: 2,
        nombre: 'PILAR CANALES Y COMPANIA LIMIT',
        rut: '77687490-6'
      },
      {
        id: 3,
        nombre: 'WASFI AFANDI ALDUNES',
        rut: '4240935-9'
      },
      {
        id: 4,
        nombre: 'ALBERTO JARA E HIJOS LIMITADA',
        rut: '76081446-6'
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('clientes', null, {})
  }
}
