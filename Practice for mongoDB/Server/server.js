const express = require("express")
const HomeRouter = require('./components/home/HomeRoutes')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false,
}))
app.use(bodyParser.json())
app.use(cors())

app.use('/', HomeRouter)

app.get('*', (req, res) => {
    res.status(400)
    res.json("404 not found")
})

app.listen(2000, (error) => {
    if (error) {
        console.error(error)

    } else {
        console.log("Server listening on port 2000");
    }
})