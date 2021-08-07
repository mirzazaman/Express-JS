const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const List = []

app.get('/', (req, res)=>{
    res.json(List);
})

app.post('/', (req, res)=>{
    List.push(req.body)
    res.send("Data Added")
})

app.listen(5000, ()=>{
    console.log("Server runing on port 5000");
})