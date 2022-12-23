const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const saltRounds = 10;

class UsuarioController{

    async AddUser(req, res) {
        const body = req.body;
        const email = req.body.email;
        const senha = req.body.senha;
        const nome = req.body.nome;

        const hash = bcrypt.hashSync(senha, saltRounds);
    
        const response = await prisma.usuarios.create({
            data: {
                email: email,
                senha: hash,
                nome: nome
            }
        });
        //console.log(body);
        res.redirect("/login");
    }

}
module.exports = new UsuarioController();