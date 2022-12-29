const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

class PedidosController {

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

        console.log('id aq', id);

        const user = await prisma.usuarios.findUnique({ where: { id: Number(id) } })
        if (!user) {
            return res.json({ message: "Ocorreu um erro!" })
        }

        const response = await prisma.pedidos.create({
            data: {
                email: email,
                produto: produto,
                quantidade: Number(quantidade),
                cidade: cidade,
                estado: estado,
                cep: Number(cep),
                endereco: endereco,
                data: '2021-09-27 15:22:53.679985+02',
                author: Number(id)
            },
            include: {
                author: true
            }
        });
        res.redirect("/");
    }
}
module.exports = new PedidosController();