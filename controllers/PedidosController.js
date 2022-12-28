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

        console.log("qqqq", id);

        const user = await prisma.usuarios.findUnique({ where: { id: Number(id) } })
        if (!user) {
            return res.json({ message: "Ocorreu um erro!" })
        }

        const response = await prisma.usuarios.create({
            data: {
                email: email,
                produto: produto,
                quantidade: quantidade,
                cidade: cidade,
                estado: estado,
                cep: cep,
                endereco: endereco,
                data: data
            },
            include: {
                author: true
            }
        });
        res.redirect("/");
    }
}
module.exports = new PedidosController();