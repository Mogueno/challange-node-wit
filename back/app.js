const express = require("express");
const nodeUuid = require("node-uuid");
const add = require("./middleware/calculator/add");
const logsToCSV = require("./util/logsToCSV");
const createCalcEntry = require("./database/query/createCalcEntry");
const performanceMiddleware = require("./middleware/core/performanceMiddleware");
const getOperationByUniqueID = require("./database/query/getOperationByUniqueID");
const logger = require("./util/logWinston");

//Global Variables --
global.shouldLogQueries = false;
global.shouldSaveLogs = false;
global.saveLogsTime = 5;
// end Global Variables

const app = express();
const port = 4000;
app.use(performanceMiddleware);

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

app.post("/server-config", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });

  var serverConfig = req.body;
  try {
    global.shouldLogQueries = serverConfig.shouldLogQueries;
    global.shouldSaveLogs = serverConfig.shouldSaveLogs;
    global.saveLogsTime = serverConfig.saveLogsTime;

    res.send("server configs updated", 200);
  } catch (error) {
    res.send(error, 500);
  }
});

app.post("/logs-to-csv", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });
  logsToCSV();
  res.send("logs saved to csv", 200);
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
