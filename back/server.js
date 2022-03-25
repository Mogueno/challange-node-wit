const express = require("express");
const nodeUuid = require("node-uuid");
const add = require("./middleware/add");
const createCalcEntry = require("./database/createCalcEntry");
const performanceMiddleware = require("./middleware/performanceMiddleware");
const getOperationByUniqueID = require("./database/getOperationByUniqueID");

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

app.get("/getOperation", (req, res) => {
  var uniqueID = req.query.uniqueID;

  const operation = getOperationByUniqueID(uniqueID);
  operation.then((result) => {
    res.json({ data: result });
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
