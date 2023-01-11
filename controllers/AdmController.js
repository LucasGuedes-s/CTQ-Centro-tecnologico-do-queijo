const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()
//Importando a API do prisma Client 

const bcrypt = require('bcrypt'); //Bcrypt é um API de criptografia de senhas

class AdmController{
    async loginadm(req, res){ //A função loginadm direcionará o usuário pra a página de Login do administrador
        res.render('pages/loginadm'); //Direcionamento
    }
    async administrador(req, res){ //A função administrador receberá os dados passados pelo body e fará um teste de usuário
        
        const body = req.body; //Recebendo o body por padrão
        const matricula = body.matricula; //Recebendo a matricula digitada pelo usuário no body, por padrão o body passa dados como String
        const matriculaAdm = parseInt(matricula); //Convertendo a matricula de String para inteiro (Int)
        const senha = body.senha; //Recebendo a senha diggitada pelo usuário

        const user = await prisma.administradores.findFirst({ //Fazendo o teste atraves do FindFirst que faz uma busca pela matricula na tabela administradores do banco de dados. 
            where: {
                matricula: matriculaAdm, //Buscando a matricula digitada pelo usuário no banco   
            }
        });

        const senhavalida = bcrypt.compareSync(senha, user.senha); //Fazendo a comparação de senhas digitada pelo usuário e a presente no banco de dados. Através da biblioteca de criptografia Bcrypt.
        if(!senhavalida){
            res.redirect("/loginadm"); //Se a senha do usuário for inválida, ele será direcionado para página de login
        }
        else {
            res.render('pages/administrador'); //Caso a matricula e a senha estejam corretas, ele será direcionado para a página do administrador.
        }

    }
    async index(req, res) {
        const pedidos = await db.getUsuarios();
        res.render("pages/pedidos", { pedidos }); //Retornando os pedidos
    }
    async pedidos(req, res){ //Página que retorna para o views os pedidos
        const pedidostatus = "Analise"; //Constante recebendo analise
        const statusped = await prisma.pedidos.findMany({ //Função FindMany do prisma faz uma busca dos pedidos que eestejam com o status igual ao pedidostaus, ou seja em analise.
            where: {
                status: pedidostatus  
            }
        });
        res.render("pages/pedidos",{pedidos:statusped}); //O administrador é retornado para a página de pedidos passanddo todos os dados de pedidos para o views.
    }
    async updateAceitar(req, res){ //Ao clicar em aceitar pedido, o seu status é atualizado e ele ganha um novo status, como aceito
        const {id} = req.params; //Recebendo o ID do pedido passado por parametro
        const id_n = parseInt(id); //O ID é recebido em forma de String, dessa forma é feita a conversão de String para inteiro.

        const statusnov = "Aceito"; //Novo status
        const response = await prisma.pedidos.update({ //A função update do prisma faz a atualização da tabela pedidos, onde o id for igual ao id passado pelo body, ele faz a atualização do status para seu statusnov que é de Aceito
            where: {
                id: id_n
            },
            data: {
                status: statusnov
            }
            
        });
                  
        res.render('pages/administrador'); //Ao aceitar o pedido o administrador é encaminhado para a página dos administradores
    }
                
    async updateRecusar(req, res){//Ao clicar em recusar pedido, o seu status é atualizado e ele ganha um novo status, como recusado

        const {id} = req.params; //Recebendo o ID do pedido passado por parametro
        const id_n = parseInt(id);//O ID é recebido em forma de String, dessa forma é feita a conversão de String para inteiro.

        const statusnov = "Recusado"; //Novo status
        const response = await prisma.pedidos.update({ //A função update do prisma faz a atualização da tabela pedidos, onde o id for igual ao id passado pelo body, ele faz a atualização do stautis para seu statusnov que é de recusado.
            where: {
                id: id_n
            },
            data: {
                status: statusnov

            }
        });

        res.redirect("/");//Ao clicar em recusar pedido, o seu status é atualizado e ele ganha um novo status, como recusado
    }
    async relatorioPdf(req, res){

        const { jsPDF } = require("jspdf");
        const doc = new jsPDF();
        doc.text("Relatório de pedidos", 10, 10);
        doc.save("Relatório.pdf");

        res.render("pages/home",{doc});
    }
    async agenda(req, res){ //Ao clicar em gerar agenda de pedidos, o administrador deve receber uma tabela com todos os pedidos aceitos por ele recentemente.
        const pedidostatus = "Aceito"; //Definindo a constante ACeito.

        const statusped = await prisma.pedidos.findMany({ //A função findMany do prisma fará uma busca na tabela pedidos todos os pedidos que o status estiver como aceito.
            where: {
                status: pedidostatus  
            }
        });

        res.render("pages/agenda",{pedidos:statusped}); //A função retornará o usuário para a pages/agenda com todos os dados necessários
    }
}

module.exports = new AdmController(); 