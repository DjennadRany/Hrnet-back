// model/Employee.js
const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfStart: { type: String, required: true },
  department: { type: String, required: true },
  birthdate: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  town: { type: String, required: true },
  zipcode: { type: Number, required: true },
});

module.exports = mongoose.model("Employee", employeeSchema); // corrected model name
