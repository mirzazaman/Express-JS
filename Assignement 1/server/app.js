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
    List.push(req.body.data)
    res.send("Data Added")
})

app.put('/', (req, res)=>{
    // let data = req.body.data
    // List.unshift(data)
    // List.map((item)=>{
    //     if(data.id === item.id){
    //         console.log("condition true");
    //         return data

    //     } else {
    //         return item
    //     }
    // })
})

app.delete('/', (req, res)=>{
    console.log("Delete Request", req.body);
})


app.listen(5000, ()=>{
    console.log("Server runing on port 5000");
})