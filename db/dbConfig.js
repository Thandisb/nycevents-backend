const pgp = require("pg-promise")();
require("dotenv").config()

const {PG_HOST, PG_USER, PG_PORT, PG_DATABASE, PG_PASSWORD}= process.env

const cn = {
    host: PG_HOST,
    user: PG_USER,
    port: PG_PORT,
    database: PG_DATABASE,
    password: PG_PASSWORD
}

console.log(cn)
const db = pgp(cn)

module.exports = db