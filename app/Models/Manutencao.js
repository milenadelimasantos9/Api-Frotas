'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Manutencao extends Model {

    static get table(){
      return 'manutencao'
    }


}

module.exports = Manutencao
