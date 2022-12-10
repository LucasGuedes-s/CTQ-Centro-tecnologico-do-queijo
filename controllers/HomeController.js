class HomeController{
    home(req, res){
        res.render('pages/home');
    }
}
module.exports = new HomeController();