'use strict'

class AuthController {
  async me({ auth }) {
    try {
      return auth.getUser()
    } catch (error) {
      return error.message;
    }
  }

  async login({ request, auth, response }) {
    try {
      const { cpf, senha } = request.all();
      let token = await auth.attempt(cpf, senha);
      return response.status(200).json({ data: token, message: 'Login feito com sucesso', status: true });
    } catch (error) {
      return error.message
    }
  }

  async logout({ auth, response }) {
    await auth.logout()
    return response.redirect('/')
  }
}

module.exports = AuthController
