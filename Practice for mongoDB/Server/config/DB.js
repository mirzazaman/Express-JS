const mongoose = require('mongoose')

module.exports.dbConnection = () =>{
    try {
    mongoose.connect('mongodb+srv://zaman:<password>@cluster0.8tmdd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})

    } catch (error) {
        
    }
}