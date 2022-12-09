const { Router } = require('express');
const login = require('../controllers/HomeController')

const routes= new Router();
routes.get('/', login.login);

module.exports = routes;