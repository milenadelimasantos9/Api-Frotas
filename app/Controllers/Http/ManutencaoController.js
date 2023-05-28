'use strict'
const Manutencao = use("App/Models/Manutencao");
const Database = use ('Database')

  class ManutencaoController {

    async cadastroManutencao({request}) {

      const data = request.only(["veiculo_id","tipo_servico","data_manutencao"])

        const manutencao = await Manutencao.create(data);

        return manutencao;
    }

    async listarManutencao({ request }) {

      const manutencao = await Database

      .table('manutencao')
      .innerJoin('veiculo','manutencao.veiculo_id','veiculo.id')

      return manutencao;
    }

    async updateManutencao({ request }) {

      const dataToUpdate = request.only(["id","veiculo_id", "tipo_servico","data_manutencao"]);

      const manutencao = await Manutencao.findOrFail(dataToUpdate.id);

      manutencao.merge(dataToUpdate);

      await manutencao.save();

      return manutencao;

    }

    async deleteManutencao({ request, }) {

      const data = request.only(["id"]);

      const manutencao = await Manutencao.findOrFail(data.id);

      await manutencao.delete();

      return {
        message: 'Manutencao Deletada'
      }
    }
}

module.exports = ManutencaoController
