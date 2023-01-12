'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('conceptos', [
      {
        id: 1,
        nombre: 'Imposiciones',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        nombre: 'Pago en efectivo',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 3,
        nombre: 'Pago',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 4,
        nombre: 'Certificado digital',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 5,
        nombre: 'renta',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 6,
        nombre: 'iva',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 7,
        nombre: 'honorario contable',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 8,
        nombre: 'honorario imposiciones',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: 9,
        nombre: 'Otros',
        createdAt: new Date(),
        updatedAt: new Date()

      }

    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('conceptos', null, {})
  }
}
