const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.connect(
        'mongodb+srv://zaman:zaman@cluster0.ljwwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useNewUrlParser: true, useFindAndModify: false },
        function (err){
            if (err){
                console.log(err);
            } else {
                console.log('DB Connected');
            }
        }
    )
}
module.exports = dbConnection