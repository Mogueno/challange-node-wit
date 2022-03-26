const { writeToPath } = require("@fast-csv/format");
const logger = require("./logWinston");
const fs = require("fs");

module.exports = function logsToCSV() {
  const path = __dirname + "/../logs/logs.csv";
  //  example data:
  // const data = [
  //   { name: "Stevie", id: 10 },
  //   { name: "Ray", id: 20 },
  // ];
  const options = { headers: true, quoteColumns: true };
  fs.readFile("logs/combined.log", "utf8", function (err, data) {
    var dataArr = [];
    data.split("\n").forEach((line) => {
      line.length > 0 && dataArr.push(JSON.parse(line));
    });
    writeToPath(path, dataArr, options)
      .on("error", (err) => logger.error(err))
      .on("finish", () => logger.info("Done writing."));
  });
};
