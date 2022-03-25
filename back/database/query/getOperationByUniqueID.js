const mongoose = require("mongoose");
const Calculator = require("../schema/CalculatorSchema");
const logger = require("../../util/logWinston");

mongoose.connect("mongodb://localhost:27017/test");

module.exports = async function getOperationByUniqueID(uniqueID) {
  const operation = await Calculator.findOne({ uniqueID });

  global.shouldLogQueries && logger.info(`GET Query -- ${operation}`);

  return operation;
};
