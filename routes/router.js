const { Router } = require('express'); //Requerindo a função do express
const auth = require('../middleware/auth') //Criando a constante auth, onde ficará salvo o id do usuároo
const Home = require('../controllers/HomeController') //Chamando a classe HomeConstroller
const LoginUser = require('../controllers/LoginUserController') //Chamando a classe LoginUserController
const LoginAdm = require('../controllers/AdmController') //Chamando a classe AdmConstroller
const AddUser = require('../controllers/UsuarioController') //Chamando a classe UsuarioConstroller
const Pedidos = require('../controllers/PedidosController') //Chamando a classe PedidosConstroller

const AddAdm = require('../AdmPadrao'); //Rota exclusiva para a criação de administradores
//Essa tota só deve ser usada por administradores da página para a segurança de todos.

const routes= new Router();

//Usuário
routes.get('/', Home.home); //Rota de direcionamento do usuário para a página home através da função home
routes.get('/login', LoginUser.login); //A rota /login direciona o usuário para a função login
routes.get('/logout', LoginUser.logout); //Logout direciona o usuário para a função logout
routes.post('/loginuser', LoginUser.loginuser); //O loginuser direciona o usuário para a função loginuser que faz o teste de login do usuário

//Administrador
routes.get('/loginadm', LoginAdm.loginadm); //O loginadm direciona o usuário para a função de login do administrador 
routes.post('/logaradm', LoginAdm.administrador); //A rota logaradm direciona o administrador a sua página inicial 
routes.get('/pedidos', LoginAdm.pedidos); //A rota de pedidos apresenta ao administrador os pedidos em analise
routes.get('/agenda', LoginAdm.agenda); //A rota de agenda apresenta ao administrador a agenda de pedidos aceitos
routes.get('/updateAceitar/:id', LoginAdm.updateAceitar); //A rota de updateACeitar chama a função de atualização do status do pedido para aceito
routes.get('/updateRecusar/:id', LoginAdm.updateRecusar); //A rota de updateRecusar chama a função de atualização do status do pedido para recusado

routes.get('/cadastro', AddUser.cadastro); //Rota que chama a função de cadastrar um novo usuário que passa o usuário para o pages/cadastro
routes.post('/adduser', AddUser.adduser); //Rota usada para chamar a função de adicionar novo usuário 
routes.get('/solicitar', auth, Pedidos.solicitar); //Rota que direciona o usuário a página de solicitar

routes.post('/addpedido', auth, Pedidos.addpedido); //Rota que chama a função de adicionar o pedido
routes.get('/addadm', AddAdm.admuser); //Rota exclusiva para adicionar administradores

module.exports = routes;