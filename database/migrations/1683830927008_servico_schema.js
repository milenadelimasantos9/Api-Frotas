'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicoSchema extends Schema {
  up () {
    this.create('servico', (table) => {
      table.increments('id').primary();
      table.string('tipo_servico');
      table.string('nome_empresa');
      table.string('data_servico');
      table.date('data_entrada');
      table.date('data_saida');
      table.string('tipo_viajem');
      table.integer('usuario_id').unsigned().references('usuario.id');
      table.integer('manutencao_id').unsigned().references('manutencao.id');
      table.integer('veiculo_id').unsigned().references('veiculo.id');
      table.integer('cidade_id').unsigned().references('cidade.id');
      table.timestamps();
    })
  }

  down () {
    this.drop('servico')
  }
}

module.exports = ServicoSchema
