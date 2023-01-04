const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

const bcrypt = require('bcrypt');

class AdmController{
    async loginadm(req, res){
        res.render('pages/loginadm');

    }
    async administrador(req, res){
        
        const body = req.body;
        const matricula = body.matricula;
        const matriculaAdm = parseInt(matricula);

        const senha = body.senha;
        const user = await prisma.administradores.findFirst({
            where: {
                matricula: matriculaAdm,     
            }
        });

        const senhavalida = bcrypt.compareSync(senha, user.senha);
        if(!senhavalida){
            res.redirect("/loginadm");
        }
        else {
            res.render('pages/administrador');
        }

    }
}
module.exports = new AdmController();