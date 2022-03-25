const express = require("express");
const nodeUuid = require("node-uuid");

const app = express();
const port = 4000;

app.get("/api/hello", (req, res) => {
  var uuid = nodeUuid.v4();
  res.set({
    "unique-id": uuid,
  });
  res.json({ data: "Hello outro! --- " + req.query.a + " --- uuid = " + uuid });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
