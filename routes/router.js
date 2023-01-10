const { Router } = require('express');
const auth = require('../middleware/auth')
const Home = require('../controllers/HomeController')
const LoginUser = require('../controllers/LoginUserController') 
const LoginAdm = require('../controllers/AdmController') 
const AddUser = require('../controllers/UsuarioController')
const Pedidos = require('../controllers/PedidosController')

const AddAdm = require('../AdmPadrao'); //Rota exclusiva para a criação de administradores

//const { pedidos } = require('../controllers/AdmController');


const routes= new Router();

//Usuário
routes.get('/', Home.home);
routes.get('/login', LoginUser.login);
routes.get('/logout', LoginUser.logout);
routes.post('/loginuser', LoginUser.loginuser);

//Administrador
routes.get('/loginadm', LoginAdm.loginadm);
routes.post('/logaradm', LoginAdm.administrador);
routes.get('/pedidos', LoginAdm.pedidos);
routes.get('/agenda', LoginAdm.agenda);
routes.get('/updateAceitar/:id', LoginAdm.updateAceitar);
routes.get('/updateRecusar/:id', LoginAdm.updateRecusar);

routes.get('/cadastro', AddUser.cadastro);
routes.post('/adduser', AddUser.adduser);
routes.get('/solicitar', auth, Pedidos.solicitar);

routes.post('/addpedido', auth, Pedidos.addpedido);
routes.get('/addadm', AddAdm.admuser);

module.exports = routes;