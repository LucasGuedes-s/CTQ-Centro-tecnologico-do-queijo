class SolicitarController{
    solicitar(req, res){
        res.render('pages/solicitar');
    }
}
module.exports = new SolicitarController();