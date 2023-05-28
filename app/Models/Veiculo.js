'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Veiculo extends Model {

  static get table(){
    return 'veiculo'
  }


}

module.exports = Veiculo
