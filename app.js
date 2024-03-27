const express = require("express")
const app = express()
const cors = require("cors")
const eventsController = require("./controllers/eventsController")

app.use(cors())
app.use(express.json())
app.use("/events", eventsController)
app.get("/", (req, res) => {
    res.send("Welcome to New York City Events Calendar")
})

app.get("*", (req, res)=> {
    res.status(404).send("Sorry, page not found")
})

module.exports = app