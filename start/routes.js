'use strict'

const UserController = require("../app/Controllers/Http/UserController");
const VeiculoController= require("../app/Controllers/Http/VeiculoController");
const CidadeController= require("../app/Controllers/Http/CidadeController");
const ManutencaoController= require("../app/Controllers/Http/ManutencaoController");
const ServicoController= require("../app/Controllers/Http/ServicoController");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

// /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
// const Route = use('Route')

// Route.get('/ usuario',() => {
//       return { message: 'Sistema de Gerenciamento de Frotas' }
// });


// Routes usuarios
const Route = use('Route')
Route.post("/register", "UserController.register");
Route.get("/index", "UserController.index");
Route.post("/updated", "UserController.update");
Route.post("/delete", "UserController.delete");
Route.post("/login", "UserController.login");

//Routes veiculos
Route.post("/cadastroVeiculo", "VeiculoController.cadastroVeiculo");
Route.get("/listarVeiculo", "VeiculoController.listarVeiculo");
Route.post("/updateVeiculo", "VeiculoController.updateVeiculo");
Route.post("/deleteVeiculo", "VeiculoController.deleteVeiculo");

//Routes Cidades

Route.post("/cadastroCidade", "CidadeController.cadastroCidade");
Route.get("/listarCidade", "CidadeController.listarCidade");
Route.post("/updateCidade", "CidadeController.updateCidade");
Route.post("/deleteCidade", "CidadeController.deleteCidade");

//Routes Manutencao

Route.post("/cadastroManutencao", "ManutencaoController.cadastroManutencao");
Route.get("/listarManutencao", "ManutencaoController.listarManutencao");
Route.post("/updateManutencao", "ManutencaoController.updateManutencao");
Route.post("/deleteManutencao", "ManutencaoController.deleteManutencao");

//Routes Servico

Route.post("/cadastroServico", "ServicoController.cadastroServico");
Route.get("/listarServico", "ServicoController.listarServico");
Route.post("/updateServico", "ServicoController.updateServico");
Route.post("/deleteServico", "ServicoController.deleteServico");
