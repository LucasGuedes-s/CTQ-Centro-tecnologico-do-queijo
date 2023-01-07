const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()
const nodemailer = require("nodemailer");
//const smtpTransport = require('nodemailer-smtp-transport');

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
    async index(req, res) {
        const pedidos = await db.getUsuarios();
        res.render("pages/pedidos", { pedidos });
    }
    async pedidos(req, res){

        const pedidostatus = "Analise";
        const statusped = await prisma.pedidos.findMany({
            where: {
                status: pedidostatus  
            }
        });
        res.render("pages/pedidos",{pedidos:statusped});
        console.log(statusped);
    }
    async updateAceitar(req, res){ 
        const {id} = req.params;
        const id_n = parseInt(id);

        const statusnov = "Aceito";
        const response = await prisma.pedidos.update({
            where: {
                id: id_n
            },

            data: {
                status: statusnov

            }
            
        });
                  
        res.redirect("/");
    }
                
    async updateRecusar(req, res){

        const {id} = req.params;
        const id_n = parseInt(id);

        const statusnov = "Recusado";
        const response = await prisma.pedidos.update({
            where: {
                id: id_n
            },

            data: {
                status: statusnov

            }
        })
        res.redirect("/");
    }
    async relatorioPdf(req, res){

        const { jsPDF } = require("jspdf");
        const doc = new jsPDF();
        doc.text("Relatório de pedidos", 10, 10);
        doc.save("Relatório.pdf");

        res.render("pages/home",{doc});
    }
}

module.exports = new AdmController();