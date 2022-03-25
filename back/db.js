const mongoose = require("mongoose");
const Calculator = require("./CalculatorSchema");

mongoose.connect("mongodb://localhost:27017/test");

async function run() {
  const calcEntry = new Calculator({
    number1: 1,
    number2: 2,
    operation: "+",
    result: 3,
  });
  await calcEntry.save();
  console.log(calcEntry);
}
run();
