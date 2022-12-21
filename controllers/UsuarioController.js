const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

class UsuarioController{

    async AddUser(req, res) {
        const body = req.body;
        /*const email = req.body.email;
        const senha = req.body.senha;
        const nome = req.body.nome;
    
        const response = await prisma.usuarios.create({
            data: {
                email: email,
                senha: senha,
                nome: nome
            }
        });*/
        console.log(body);
        //res.redirect("/login");
    }

}
module.exports = new UsuarioController();