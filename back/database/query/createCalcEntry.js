const mongoose = require("mongoose");
const Calculator = require("../schema/CalculatorSchema");
const ServerConfig = require("../schema/ServerConfigSchema");
const logger = require("../../util/logWinston");

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

  global.shouldLogQueries && logger.info(`SAVE Query -- ${calcEntry}`);
};
