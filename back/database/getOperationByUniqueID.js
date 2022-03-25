const mongoose = require("mongoose");
const Calculator = require("../CalculatorSchema");

mongoose.connect("mongodb://localhost:27017/test");

module.exports = async function getOperationByUniqueID(uniqueID) {
  return await Calculator.findOne({ uniqueId: uniqueID });
};
