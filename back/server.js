const express = require("express");
const app = express();
const port = 4000;

app.get("/api/hello", (req, res) => {
  res.json({ data: "Hello outro! --- " + req.query.a });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
