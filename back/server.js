const express = require("express");
const nodeUuid = require("node-uuid");

const app = express();
const port = 4000;

app.post("/add", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });
  var number1 = parseInt(req.query.number1);
  var number2 = parseInt(req.query.number2);
  //TODO: Call the add method
  var result = add(number1, number2);
  res.json({ result: result });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
