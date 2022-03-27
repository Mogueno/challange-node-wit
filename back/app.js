const express = require("express");
const nodeUuid = require("node-uuid");
const add = require("./middleware/calculator/add");
const divide = require("./middleware/calculator/divide");
const subtract = require("./middleware/calculator/subtract");
const multiply = require("./middleware/calculator/multiply");
const logsToCSV = require("./util/logsToCSV");
const createCalcEntry = require("./database/query/createCalcEntry");
const performanceMiddleware = require("./middleware/core/performanceMiddleware");
const getOperationByUniqueID = require("./database/query/getOperationByUniqueID");
const logger = require("./util/logWinston");
const bodyParser = require("body-parser");

//Global Variables --
global.shouldLogQueries = false;
global.shouldSaveLogs = true;
global.saveLogsTime = 5;
// end Global Variables

const app = express();
const port = 4000;
app.use(performanceMiddleware);
app.use(bodyParser.json());

app.post("/add", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });

  var number1 = parseInt(req.query.number1);
  var number2 = parseInt(req.query.number2);

  var result = add(number1, number2);

  createCalcEntry(number1, number2, "add", result, uuid);

  res.json({ result: result });
});

app.post("/divide", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });

  var number1 = parseInt(req.query.number1);
  var number2 = parseInt(req.query.number2);

  var result = divide(number1, number2);

  createCalcEntry(number1, number2, "divide", result, uuid);

  res.json({ result: result });
});

app.post("/subtract", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });

  var number1 = parseInt(req.query.number1);
  var number2 = parseInt(req.query.number2);

  var result = subtract(number1, number2);

  createCalcEntry(number1, number2, "subtract", result, uuid);

  res.json({ result: result });
});

app.post("/multiply", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });

  var number1 = parseInt(req.query.number1);
  var number2 = parseInt(req.query.number2);

  var result = multiply(number1, number2);

  createCalcEntry(number1, number2, "multiply", result, uuid);

  res.json({ result: result });
});

app.post("/server-config", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });
  var serverConfig = req.body;
  try {
    console.log("serverConfig: ", serverConfig);
    global.shouldLogQueries = serverConfig?.shouldLogQueries;
    global.shouldSaveLogs = serverConfig?.shouldSaveLogs;
    global.saveLogsTime = serverConfig?.saveLogsTime;

    res.status(200).json({ data: "server configs updated" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

app.get("/server-config", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });

  res.status(200).json({
    data: {
      shouldLogQueries: global.shouldLogQueries,
      shouldSaveLogs: global.shouldSaveLogs,
      saveLogsTime: global.saveLogsTime,
    },
  });
});

app.post("/logs-to-csv", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });
  if (global.shouldSaveLogs) {
    logsToCSV();
    res.status(200).json({ data: "logs saved to csv" });
  } else {
    res.status(500).send({ data: "configure server to save logs" });
  }
});

app.get("/get-operation", (req, res) => {
  var uniqueID = req.query.uniqueID;

  const operation = getOperationByUniqueID(uniqueID);
  operation.then((result) => {
    res.json({ data: result });
  });
});

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
