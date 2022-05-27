const express = require('express')

// Buscar o arquivo dentro da pasta controllers
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()


// mostrar rotas .ejs
route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

// Criar e abrir uma sala
route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

// Criar rota das questões
route.post('/question/create/:room', QuestionController.create)

//Rota marcar ou excluir ('/arquivo/num.sala/pergunta/check ou delete'). Formato de dentro da modal que tem que passar informação:
route.post('/question/:room/:question/:action', QuestionController.index)


// exportar o route
module.exports = route
