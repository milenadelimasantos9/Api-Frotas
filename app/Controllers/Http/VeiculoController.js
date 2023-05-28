'use strict'

const Veiculo = use("App/Models/Veiculo");

class VeiculoController {

  async cadastroVeiculo({ request }) {

    const data = request.only(["nome", "categoria", "marca", "ano", "capacidade_veiculo"])

    const veiculo = await Veiculo.create(data);

    return veiculo;
  }

  async listarVeiculo({ request }) {

    const veiculo = await Veiculo.all();

    return veiculo;
  }

  async updateVeiculo({ request }) {

    const dataToUpdate = request.only(["id", "nome", "categoria", "marca", "ano", "capacidade_veiculo"]);

    const veiculo = await Veiculo.findOrFail(dataToUpdate.id);

    veiculo.merge(dataToUpdate);

    await veiculo.save();

    return veiculo;

  }

  async deleteVeiculo({ request, }) {

    const data = request.only(["id"]);

    const veiculo = await Veiculo.findOrFail(data.id);

    await veiculo.delete();

    return {
      message: 'Veiculo Deletado'
    }
  }
}

module.exports = VeiculoController
