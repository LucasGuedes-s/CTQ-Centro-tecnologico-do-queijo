const { Router } = require('express');
const Home = require('../controllers/HomeController')
const Login = require('../controllers/LoginController')
const Solicitar = require('../controllers/SolicitarController') 
const LoginAdm = require('../controllers/LoginAdmController') 

const routes= new Router();

routes.get('/', Home.home);
routes.get('/login', Login.login);
routes.get('/solicitar', Solicitar.pedido);
routes.get('/loginadm', LoginAdm.loginadm)

module.exports = routes;