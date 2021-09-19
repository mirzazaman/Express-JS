const express = require("express")
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConnection = require("./config/DB")

app.use(bodyParser.urlencoded({
    extended: false,
}))
app.use(bodyParser.json())
app.use(cors())

dbConnection()

app.listen(2000, (error) => {
    if (error) {
        console.error(error)

    } else {
        console.log("Server listening on port 2000");
    }
})