const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RegisterSchema = new Schema({
    ID: Number,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    department: String,
    dateBirth: String,
    contractType: String,
    dateEmployment: String,
    photo: String,
})

module.exports = mongoose.model("register", RegisterSchema)