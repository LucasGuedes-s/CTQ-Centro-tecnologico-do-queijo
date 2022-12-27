const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()

class PedidosController{

    async Addpedido(req, res) {
        const body = req.body;
        const email = req.body.email;
        const produto = req.body.produto;
        const quantidade = req.body.quantidade;
        const cidade = req.body.cidade;
        const estado = req.body.estado;
        const cep = req.body.cep;
        const endereco = req.body.endereco;
        const data = req.body.data;

        
}
}
module.exports = new PedidosController();