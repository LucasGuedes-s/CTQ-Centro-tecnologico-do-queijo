const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const saltRounds = 10;

class UsuarioController{

    async adduser(req, res) {
        const body = req.body;
        const email = req.body.email;
        const senha = req.body.senha;
        const nome = req.body.nome;

        const hash = bcrypt.hashSync(senha, saltRounds);

        const user = await prisma.usuarios.findUnique({where: {email}})
        if(user){
            return res.render('pages/cadastro', { message: "Já existe um usuário com esse email" })
        }
    
        const response = await prisma.usuarios.create({
            data: {
                email: email,
                senha: hash,
                nome: nome
            }
        });
        res.redirect("/login");
    }
}
module.exports = new UsuarioController();