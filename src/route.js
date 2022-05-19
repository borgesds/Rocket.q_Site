const express = require('express')

const route = express.Router()


// mostrar rotas .ejs
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

// exportar o route
module.exports = route