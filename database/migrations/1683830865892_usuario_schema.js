'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuario', (table) => {
      table.increments('id').primary();
      table.string('nome');
      table.string('cpf');
      table.string('senha');
      table.timestamps();
    })
  }

  down () {
    this.drop('usuario')
  }
}

module.exports = UsuarioSchema
