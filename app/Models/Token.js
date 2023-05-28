'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Token extends Model {

  static get table() {
    return 'token'
  }

  static get updatedAtColumn() {
    return 'atualizado_em'
  }

  static get createdAtColumn() {
    return 'criado_em'
  }

  static boot() {
    super.boot()
  }
}


module.exports = Token
