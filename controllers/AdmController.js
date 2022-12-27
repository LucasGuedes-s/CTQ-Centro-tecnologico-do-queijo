const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

const bcrypt = require('bcrypt');
const { solicitar } = require('./SolicitarController');
const saltRounds = 10;

class AdmController{
    async addadm(res, req){
        const body = req.body;
        const matricula = body.matricula;
        const senha = body.senha;
        const adm = await prisma.administradores.findFirst({
            where: {
                matricula: matricula,
                senha: senha,
            }
        });
        if (!adm) {
            const response = await prisma.administradores.create({
                data: {
                    matricula, 
                    senha, 
                }
            });
            
        }
        else {
            res.redirect("/loginadm");
       }

    }
}
module.exports = new AdmController();