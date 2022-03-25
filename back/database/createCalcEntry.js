const mongoose = require("mongoose");
const Calculator = require("./schemas/CalculatorSchema");
const ServerConfig = require("./schemas/ServerConfigSchema");
const logger = require("../util/logWinston");

mongoose.connect("mongodb://localhost:27017/test");

module.exports = async function createCalcEntry(a, b, operation, result, uuid) {
  const serverConfigID = "623e36af760fae24f5c87332";
  const calcEntry = new Calculator({
    uniqueId: uuid,
    number1: a,
    number2: b,
    operation: operation,
    result: result,
  });
  await calcEntry.save();

  const serverConfig = await ServerConfig.findById(serverConfigID);
  serverConfig.shouldLogQueries && logger.info(`SAVE Query -- ${calcEntry}`);
};
