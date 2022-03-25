const mongoose = require("mongoose");

const calculatorSchema = new mongoose.Schema({
  uniqueId: String,
  number1: Number,
  number2: Number,
  operation: String,
  result: Number,
});

module.exports = mongoose.model("Calculator", calculatorSchema);
