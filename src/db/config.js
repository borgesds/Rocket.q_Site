const sqlite3 = require('sqlite3')
// Buscar so uma ferramenta dentro do sqlite
const { open } = require('sqlite')

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })
