'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Servico extends Model {

  static get table(){
    return 'servico'
  }

}

module.exports = Servico
