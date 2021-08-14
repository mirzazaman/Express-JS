const express = require("express")
const HomeRouter = require('./components/home/HomeRouter')
const AuthRouter = require('./components/auth/AuthRouter')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false,
}))
app.use(bodyParser.json())
app.use(cors())

// app.get('/get', (req, res) => {
//     res.status(200)
//     res.json('outer is working')
// })

app.use('/home', HomeRouter)
app.use('/auth', AuthRouter)


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