const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
//Importando a API do prisma Client 

class PedidosController {

    async solicitar(req, res){ //A função solicitar deve direcionar o usuário para a página de solicitar
        res.render('pages/solicitar');
    }

    async addpedido(req, res) { //A função addpedido recebe os pedidos passados no views pelo usuário e faz o cadastro desses pedidos na tabela pedidos do banco de dados.
        const body = req.body; //Recebe o body por padrão
        const id = req.session.user; //Recebe o id do usuário passado pelo session
        const email = body.email; //Recebe o email do usuário o qual ele deseja receber a confirmação do pedido
        const produto = body.produto; //Recebe o produto que o usuário passou
        const quantidade = body.quantidade; //Recebe a quantidade do produto que o usuário passou
        const cidade = body.cidade; //Recebe a cidade de entrega do produto
        const estado = body.estado; //Recebe o estado de entrega do produto
        const cep = body.cep; //Recebe o CEP de entrega do produto
        const endereco = body.endereco; //Recebe o endereço de entrega do produto
        const data = body.data; //Recebe a data de entrega do produto
        const status = "Analise"//O produto recebe por padrão um status de analíse

        const date = new Date(data);
        const result = date.toISOString(); //A data é convertida para uma String

        const user = await prisma.usuarios.findUnique({ where: { id: Number(id) } }) //A função do prisma findUnique faz uma busca no banco de dados na tabela usuários pelo usuário do ID passado.
        if (!user) {
            res.render('pages/cadastro');
            //Se o ID não estiver cadastrado ele deve direcionar para a página de cadastro
        }
        //Dessa forma, é criado o pedido na tabela pedidos através da função do prisma create, passando os dados que foi descritos pelo usuário no views.
        const response = await prisma.pedidos.create({
            data: {
                email: email,
                produto: produto,
                quantidade: Number(quantidade),
                cidade: cidade,
                estado: estado,
                cep: Number(cep),
                endereco: endereco,
                data: result,
                authorId: id,
                status: status
            },
            include:{
                author: true
            }
        });
        res.redirect("/"); //Após o pedido ser criado o usuário é direcionadp para a página home.
    }
}
module.exports = new PedidosController();