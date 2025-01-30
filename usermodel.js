const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/userDatabase")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    role:String
})


module.exports = mongoose.model("user",userSchema)





