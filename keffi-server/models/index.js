const dbConfig = require("../config/config")
const mongoose = require("mongoose")
mongoose.Promise = global.Promise


const db = {}
db.mongoose = mongoose
db.url = dbConfig.url;
db.register = require("../models/register")
db.appraisal = require("../models/appraisal")


module.exports = db