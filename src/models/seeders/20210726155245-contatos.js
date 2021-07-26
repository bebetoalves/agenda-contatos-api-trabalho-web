'use strict'

const faker = require('faker')

const contatos = [...Array(15)].map((contato) => ({
  nome: faker.name.findName(),
  endereco: faker.address.streetName(),
  email: faker.internet.email(),
  telefone: faker.phone.phoneNumber(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contatos', contatos, {})
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Contatos', null, {})
  }
}
