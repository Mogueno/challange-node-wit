const mongoose = require("mongoose");
const Calculator = require("../CalculatorSchema");

mongoose.connect("mongodb://localhost:27017/test");

module.exports = async function createCalcEntry(a, b, operation, result, uuid) {
  const calcEntry = new Calculator({
    uniqueId: uuid,
    number1: a,
    number2: b,
    operation: operation,
    result: result,
  });
  await calcEntry.save();
  console.log("SAVED -- ", calcEntry);
};
