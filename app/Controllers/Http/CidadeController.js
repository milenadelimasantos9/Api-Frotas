'use strict'
const Cidade = use("App/Models/Cidade");

class CidadeController {

  async cadastroCidade({ request }) {

    const data = request.only(["nome", "estado"])

    const cidade = await Cidade.create(data);

    return cidade;
  }

  async listarCidade({ request }) {

    const cidade = await Cidade.all();

    return cidade;
  }

  async updateCidade({ request }) {

    const dataToUpdate = request.only(["id", "nome", "estado"]);

    const cidade = await Cidade.findOrFail(dataToUpdate.id);

    cidade.merge(dataToUpdate);

    await cidade.save();

    return cidade;

  }

  async deleteCidade({request,}){

    const data = request.only(["id","nome"]);

    const cidade = await Cidade.findOrFail(data.id);

      await cidade.delete();

      return{
        message: 'Cidade Deletada'
      }
  }

}

module.exports = CidadeController
