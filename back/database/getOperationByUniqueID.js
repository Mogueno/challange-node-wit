const mongoose = require("mongoose");
const Calculator = require("./schemas/CalculatorSchema");
const logger = require("../util/logWinston");

mongoose.connect("mongodb://localhost:27017/test");

module.exports = async function getOperationByUniqueID(uniqueID) {
  const serverConfigID = "623e36af760fae24f5c87332";
  const operation = await Calculator.findOne({ uniqueID });
  const serverConfig = await ServerConfig.findById(serverConfigID);

  serverConfig.shouldLogQueries && logger.info(`GET Query -- ${operation}`);

  return operation;
};
