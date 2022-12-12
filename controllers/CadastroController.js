class CadastroController{
    cadastro(req, res){
        res.render('pages/cadastro');
    }
}
module.exports = new CadastroController();