const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppraisalSchema = new Schema({
  month: String,
  year: Number,
  department: String,
  ID: Number,
  firstName: String,
  lastName: String,
  qualityOfWork: Number,
  delivery: Number,
  responsibility: Number,
  quantityOfWork: Number,
  punctuality: Number,
  supervisorComment: String,
  hrComment: String,
}, {timestamps: true});

module.exports = mongoose.model("appraisal", AppraisalSchema);
