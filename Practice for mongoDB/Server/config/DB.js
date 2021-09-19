const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(
        "mongodb+srv://zaman:zaman@cluster0.ljwwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        function (error) {
            if (error) {
                console.log(error.message)
            } else {
                console.log("Db Connected Successfully.");
            }
        }
    )
}

module.exports = dbConnection;