const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()
//Importando a API do prisma Client 

const bcrypt = require('bcrypt'); //Bcrypt é um API de criptografia de senhas
const { Hash } = require('crypto');
const saltRounds = 10; //Definindo o numero de saltos que se deve dá para criptografar as senhas

class LoginUserController {

    async login(req, res){ //A função login direciona o usuário para a página de login
        res.render("pages/login")
    }

    async loginuser(req, res){ //A função loginuser faz o teste do email e senha passadas pelo usuário

        const body = req.body; //Recebendo o body por padrão
        const email = body.email; //Recebendo o email digitado pelo usuário no body
        const senha = body.senha; //Recebendo a senha digitada pelo usuário no body
        
        const user = await prisma.usuarios.findFirst({ //A função findFirst faz uma busca na tabela usuários do banco de dados pelo email digitado pelo usuário 
            where: {
                email: email,
                
            }
        });

        const senhavalida = bcrypt.compareSync(senha, user.senha); //A senha digitada pelo usuário é criptografada e testada pelo API de criptografia bcrypt.

        if (!senhavalida) {
            res.redirect('/'); //Caso a senha do usuário não for igual a cadastrada no banco de dados ele será direcionado para página home.
        }
        else {
            req.session.user = user.id;
            res.redirect("/solicitar"); //Caso o login do usuário for igual ao cadastrado no banco de dados ele será direcionado para página de solicitar para fazer seu devido pedido, é passada para a página de pedidos o ID do usuário, para que ele permaneça logado no sistema e consiga fazer o seu pedido.
        }
    }
    async logout(req, res){ //A função logout direciona o usuário para a página home, e faz o logout dele do sistema, dessa forma, retornando para o session definido no middleware/auth um usuário nulo.
        req.session.user = null;
        res.redirect("/"); 
    }
}
module.exports = new LoginUserController();