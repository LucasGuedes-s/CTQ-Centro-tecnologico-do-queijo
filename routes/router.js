const { Router } = require('express');
const auth = require('../middleware/auth')
const Home = require('../controllers/HomeController')
const Login = require('../controllers/LoginController')
const LoginUser = require('../controllers/LoginUserController') 
const LoginAdm = require('../controllers/LoginAdmController') 
const Cadastro = require('../controllers/CadastroController') 
const AddUser = require('../controllers/UsuarioController')
const Solicitar = require('../controllers/SolicitarController')

const routes= new Router();

routes.get('/', Home.home);
routes.get('/login', Login.login);
routes.get('/logout', LoginUser.logout)
routes.post('/loginuser', LoginUser.loginuser);
routes.post('/loginadm', LoginAdm.loginadm)
routes.get('/cadastro', Cadastro.cadastro)
routes.post('/adduser', AddUser.adduser)
routes.get('/solicitar', auth, Solicitar.solicitar);

module.exports = routes;