'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CidadeSchema extends Schema {
  up () {
    this.create('cidade', (table) => {
      table.increments('id').primary();
      table.string('nome');
      table.string('estado');
      table.timestamps();
    })
  }

  down () {
    this.drop('cidade')
  }
}

module.exports = CidadeSchema
