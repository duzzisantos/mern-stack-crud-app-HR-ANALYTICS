const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppraisalSchema = new Schema({
  month: String,
  department: String,
  staffID: Number,
  firstName: String,
  lastName: String,
  qualityOfWork: Number,
  delivery: Number,
  responsibility: Number,
  quantityOfWork: Number,
  punctuality: Number,
});

module.exports = mongoose.model("appraisal", AppraisalSchema);
