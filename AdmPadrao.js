const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()
/* Página exclusiva para adicionar Administradores*/ 
const bcrypt = require('bcrypt');
const { type } = require('os');
const saltRounds = 10;

class Administrador{
    async admuser(req, res) {
        const admUser = 202212304; //Defina a matricula padrão para o administrador
        const senha  = "password"; //Defina a senha padrão do administrador
        const id = 4; //Defina um ID para o ADM

        const hash = bcrypt.hashSync(senha, saltRounds); //A senha deinida será criptografada

        const user = await prisma.administradores.findUnique({where: {id: id}})

        if(user){
            return res.render('pages/home', { message: "Já existe um Administrador com essa matricula" })
        }
        else{
            const response = await prisma.administradores.create({
                data: {
                    matricula: admUser,
                    senha: hash,
                }
            });
            type(admUser);
        }
        res.redirect("/loginadm");
    }

}
module.exports = new  Administrador()