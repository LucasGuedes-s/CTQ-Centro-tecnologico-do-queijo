const { Router } = require('express');
const auth = require('../middleware/auth')
const Home = require('../controllers/HomeController')
const Login = require('../controllers/LoginController')
const LoginUser = require('../controllers/LoginUserController') 
const LoginAdm = require('../controllers/AdmController') 
const Cadastro = require('../controllers/CadastroController') 
const AddUser = require('../controllers/UsuarioController')
const Solicitar = require('../controllers/SolicitarController')
const Pedidos = require('../controllers/PedidosController')


const routes= new Router();

routes.get('/', Home.home);
routes.get('/login', Login.login);
routes.get('/logout', LoginUser.logout)
routes.post('/loginuser', LoginUser.loginuser);
routes.post('/loginadm', LoginAdm.addadm)
routes.get('/cadastro', Cadastro.cadastro)
routes.post('/adduser', AddUser.adduser)
routes.get('/solicitar', auth, Solicitar.solicitar);
routes.post('/addpedido', Pedidos.addpedido);


module.exports = routes;