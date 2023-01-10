const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

class PedidosController {

    async solicitar(req, res){
        res.render('pages/solicitar');
    }

    async addpedido(req, res) {
        const body = req.body;
        const id = req.session.user;
        const email = body.email;
        const produto = body.produto;
        const quantidade = body.quantidade;
        const cidade = body.cidade;
        const estado = body.estado;
        const cep = body.cep;
        const endereco = body.endereco;
        const data = body.data;
        const status = "Analise"
        
        //console.log(data);
        //console.log('id aq', id);
        
        const date = new Date(data);
        const result = date.toISOString();
        
        //console.log(result);

        const user = await prisma.usuarios.findUnique({ where: { id: Number(id) } })
        if (!user) {
            return res.json({ message: "Ocorreu um erro!" })
        }
        console.log(user);

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
        res.redirect("/");
    }
}
module.exports = new PedidosController();