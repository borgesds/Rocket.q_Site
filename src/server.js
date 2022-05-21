// buscar express
const express = require('express')
// buscar o arquivo de rota que é o route.js
const route =require('./route')
// modulo path para indicar um caminho
const path = require('path')


// criar server
const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

// caminho da pasta do projeto
server.set('views', path.join(__dirname, 'views'))

// config middle
server.use(express.urlencoded({extended: true}))

// usar o arquivo route
server.use(route)

server.listen(3000, () => console.log("RODANDO"))
