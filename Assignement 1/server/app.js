const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const List = require('./public/list/List')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.get('/', (req, res)=>{
    // res.send("Hello World!")
    res.json(List);
})

app.post('/', (req, res)=>{

    // console.log(req.body);
    res.send(`Name is ${req.body.name} My Role is ${req.body.role}`)

})

app.listen(5000, ()=>{
    console.log("Server runing on port 5000");
})