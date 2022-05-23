const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE room (
            id INTEGER PRIMARY KEY,
            pass TEXT
            )`)
    }
}

initDb.init()