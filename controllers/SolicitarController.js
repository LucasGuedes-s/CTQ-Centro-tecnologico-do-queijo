class SolicitarController{
    pedido(req, res){
        res.render('pages/solicitar');
    }
}
module.exports = new SolicitarController();