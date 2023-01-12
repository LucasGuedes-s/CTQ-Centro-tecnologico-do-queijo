const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()
//Importando a API do prisma Client 

const bcrypt = require('bcrypt'); //Bcrypt é um API de criptografia de senhas
const saltRounds = 10; //Definindo o numero de saltos que se deve dá para criptografar as senhas

class UsuarioController{

    async cadastro(req, res){ //A função cadastro direciona o usuário para a página de cadastro
        res.render('pages/cadastro');
    }

    async adduser(req, res) {
        const body = req.body; //Recebendo por padrão o body
        const email = req.body.email; //Recebendo o email digitado pelo usuário no body
        const senha = req.body.senha; //Recebendo a senha digitado pelo usuário no body
        const nome = req.body.nome; //Recebendo nome/empresa digitado pelo usuário no body

        const hash = bcrypt.hashSync(senha, saltRounds); //O hashSync é função da biblioteca bcrypt para criptografar a senha digitada pelo usuáro

        const user = await prisma.usuarios.findUnique({where: {email}}) //A função FindUnique do prisma verifica se já exste aquele email cadastrado na plataforma
        if(user){
            return res.render('pages/cadastro', { message: "Já existe um usuário com esse email" })
        }
        //Caso não exista aquele email cadastrado, a função create do prisma vai cadastrar na tabela usuários do banco de dados o novo usuário
        const response = await prisma.usuarios.create({
            data: {
                email: email,
                senha: hash,
                nome: nome
            }
        });
        res.redirect("/login"); //Redirecionando o usuário para a página de login
    }
}
module.exports = new UsuarioController();