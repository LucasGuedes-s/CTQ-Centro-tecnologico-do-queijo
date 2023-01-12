class HomeController{
    home(req, res){
        res.render('pages/home'); //Direciona o usuário para a pagina home, que é a página de incio
    }
}
module.exports = new HomeController();