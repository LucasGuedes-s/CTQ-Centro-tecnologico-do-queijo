
/*const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const saltRounds = 10;

class LoginController{
    login(req, res) {
        const body = req.body;
        const email = body.email;
        const senha = body.senha;

        const hash = bcrypt.hashSync(senha, saltRounds);

        const user = prisma.usuarios.findFirst({
            where: {
                OR: [
                    { email: email },
                    { senha: hash }
                ]
            }
        });
        console.log(user)
        if (lenght(user) == 1) {
            res.json({message: "Usuário encontrado"})
        }
    }
    pedido(req, res) {
        res.render('pages/solicitar');
    }
}

module.exports = new LoginController();*/