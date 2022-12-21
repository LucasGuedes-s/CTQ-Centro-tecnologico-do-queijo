const { Router } = require('express');
const Home = require('../controllers/HomeController')
const Login = require('../controllers/LoginController')
const Solicitar = require('../controllers/SolicitarController') 
const LoginAdm = require('../controllers/LoginAdmController') 
const Cadastro = require('../controllers/CadastroController') 
const AddUser = require('../controllers/UsuarioController')

const routes= new Router();

routes.get('/', Home.home);
routes.get('/login', Login.login);
routes.get('/solicitar', Solicitar.pedido);
routes.get('/loginadm', LoginAdm.loginadm)
routes.get('/cadastro', Cadastro.cadastro)
routes.post('/usuarios', AddUser.AddUser)

module.exports = routes;