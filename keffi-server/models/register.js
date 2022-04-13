const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RegisterSchema = new Schema({
    staffID: Number,
    firstName: String,
    lastName: String,
    email: String,
    role: String,
    department: String,
    dateBirth: String,
    contract_type: String,
    dateEmployment: String,
})

module.exports = mongoose.model("register", RegisterSchema)