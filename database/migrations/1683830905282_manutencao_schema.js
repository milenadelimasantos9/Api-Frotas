'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ManutencaoSchema extends Schema {
  up () {
    this.create('manutencao', (table) => {
      table.increments('id').primary();
      table.integer('veiculo_id').unsigned().references('veiculo.id');
      table.string('tipo_servico');
      table.date('data_manutencao');
      table.timestamps();
    })
  }

  down () {
    this.drop('manutencao')
  }
}

module.exports = ManutencaoSchema
