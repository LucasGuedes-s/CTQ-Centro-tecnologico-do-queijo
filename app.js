const express = require('express');
const session = require("express-session");
const { json, urlencoded} = require("express")
const app = express()
const port = 3333 

const routes = require('./routes/router')

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static('./public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log('Servidor iniciado')
});