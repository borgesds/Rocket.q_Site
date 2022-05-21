const express = require('express')

const route = express.Router()


// mostrar rotas .ejs
route.get('/', (req, res) => res.render("index"))
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))
//Rota marcar ou excluir ('/arquivo/num.sala/pergunta/check ou delete'). Formato de dentro da modal que tem que passar informação:
// route.post('/room/:room/:question/:action')

// exportar o route
module.exports = route