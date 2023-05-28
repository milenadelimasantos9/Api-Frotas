'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VeiculoSchema extends Schema {
  up () {
    this.create('veiculo', (table) => {
      table.increments('id').primary();
      table.string('nome');
      table.string('categoria');
      table.string('marca');
      table.string('ano');
      table.string('capacidade_veiculo');
      table.timestamps();
    })
  }

  down () {
    this.drop('veiculo')
  }
}

module.exports = VeiculoSchema
