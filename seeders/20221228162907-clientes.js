'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [
      {
        id: 1,
        nombre: 'ELBA DEL CARMEN DE JONGH BRAVO',
        rut: '3009572-3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: 'PILAR CANALES Y COMPANIA LIMIT',
        rut: '77687490-6',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 3,
        nombre: 'WASFI AFANDI ALDUNES',
        rut: '4240935-9',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 4,
        nombre: 'ALBERTO JARA E HIJOS LIMITADA',
        rut: '76081446-6',
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('clientes', null, {})
  }
}
