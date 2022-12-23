const { PrismaClient } = require('@prisma/client');
prisma = new PrismaClient()


class LoginController{
    login(req, res){
        res.render("pages/login")
    }
}

module.exports = new LoginController();