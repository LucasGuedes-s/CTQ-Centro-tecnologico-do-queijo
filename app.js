const express = require('express')
const app = express()
const port = 3333

const routes = require('./routes/router')
app.use(routes);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static('./public'));

app.listen(port, () => {
    console.log('Servidor iniciado')
});