'use strict'
const Servico = use("App/Models/Servico");
const Database = use ("Database");

class ServicoController {

  async cadastroServico ({ request }) {

    const data = request.only(["tipo_servico", "nome_empresa", "data_servico", "data_entrada", "data_saida","tipo_viajem","usuario_id","manutencao_id","veiculo_id","cidade_id"])

    const servico = await Servico.create(data);

    return servico;
  }

  async listarServico({ request }) {

    const servicos = await Database

          .table('servico')
          .innerJoin('veiculo','servico.veiculo_id','veiculo.id')
          .innerJoin('usuario','servico.usuario_id','usuario.id')
          .innerJoin('cidade','servico.cidade_id','cidade.id')
          .innerJoin('manutencao','servico.manutencao_id','manutencao_id')

    return servicos;
  }

  async updateServico({ request }) {

    const dataToUpdate = request.only(["id","tipo_servico", "nome_empresa", "data_servico", "data_entrada", "data_saida","tipo_viajem","usuario_id","manutencao_id","veiculo_id","cidade_id"]);

    const servico = await Servico.findOrFail(dataToUpdate.id);

    servico.merge(dataToUpdate);

    await servico.save();

    return servico;

  }

  async deleteServico({ request, }) {

    const data = request.only(["id"]);

    const servico = await Servico.findOrFail(data.id);

    await servico.delete();

    return {
      message: 'Servico Deletado'
    }
  }







}

module.exports = ServicoController
