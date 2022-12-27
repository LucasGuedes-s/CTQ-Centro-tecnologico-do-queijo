class LoginAdmController {
    loginadm(req, res) {
        res.render('pages/loginadm');
    }

    async addadm(req, res) {

        const senha = "password";
        const hash = bcrypt.hashSync(senha, saltRounds);

        const response = await prisma.usuarios.create({
            data: {
                matricula: 20221230011,
                senha: hash,
            }
        });
    }

    async logaradm(req, res) {
        const body = req.body;
        const matricula = body.matricula;
        const senha = body.senha;

        const user = await prisma.usuarios.findFirst({
            where: {
                matricula: matricula
            }
        });
        const senhavalida = bcrypt.compareSync(senha, user.senha);

        if (!senhavalida) {
            res.redirect('/');
        }
        else {
            req.session.user = user.id;
            res.redirect("/");
        }

    }

}
module.exports = new LoginAdmController();