const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()
/* Página exclusiva para adicionar Administradores*/ 

const bcrypt = require('bcrypt');
const { type } = require('os');
const saltRounds = 10;

class Administrador{
    async admuser(req, res) {

        const admUser = 202212301; //Defina a matricula padrão para o administrador
        const senha  = "password"; //Defina a senha padrão do administrador
        const id = 1; //Defina um ID para o ADM

        const hash = bcrypt.hashSync(senha, saltRounds); //A senha definida será criptografada

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
        res.redirect("/loginadm"); //Administrador adicionado com sucesso!!
    }

}
module.exports = new  Administrador()