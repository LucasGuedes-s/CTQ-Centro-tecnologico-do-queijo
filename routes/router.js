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

const AddAdm = require('../AdmPadrao'); //Rota exclusiva para a criação de administradores
//const { pedidos } = require('../controllers/AdmController');


const routes= new Router();

//Usu
routes.get('/', Home.home);
routes.get('/login', Login.login);
routes.get('/logout', LoginUser.logout);
routes.post('/loginuser', LoginUser.loginuser);

//Administrador
routes.get('/loginadm', LoginAdm.loginadm);
routes.post('/logaradm', LoginAdm.administrador);
routes.get('/pedidos', LoginAdm.pedidos);
routes.get('/updateAceitar/:id', LoginAdm.updateAceitar);
routes.get('/updateRecusar/:id', LoginAdm.updateRecusar);

routes.get('/cadastro', Cadastro.cadastro);
routes.post('/adduser', AddUser.adduser);
routes.get('/solicitar', auth, Solicitar.solicitar);

routes.post('/addpedido', auth, Pedidos.addpedido);
routes.get('/addadm', AddAdm.admuser);

module.exports = routes;