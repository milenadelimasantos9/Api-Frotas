'use strict'

const moment = use('moment');
const User = use("App/Models/User");
const Token = use("App/Models/Token");
const Hash = use('Hash');

class UserController {

  async register({request}) {

    const data = request.only(["nome", "cpf", "senha"])
      const user = await User.create(data);

      return user;
  }

  async index({ request, response, view }) {

    const users = await User.all();

    return users;
}

  async update({request}){

    const dataToUpdate = request.only([ "id","nome","senha","cpf"]);

    dataToUpdate.senha = await Hash.make(dataToUpdate.senha)
    const user = await User.findOrFail(dataToUpdate.id);

    user.merge(dataToUpdate);

    await user.save();

    return user;

  }

  async delete({request,}){

    const data = request.only(["id","nome"]);

    const user = await User.findOrFail(data.id);

      await user.delete();

      return{
        message: 'Usuario Deletado'
      }
  }

  async login({request,response,auth }) {

     const {cpf,senha} = request.all();

     const user = await User.query("id", "nome", "cpf", "senha").where({cpf: cpf}).fetch();

     const token = await auth.attempt(cpf ,senha);

     if(user && token){
      return response.send({usuario:user, token: token.token, sucesso:true})

     }else{
      return response.send('usuario nao encontrado')
     }

  }

}



module.exports = UserController
