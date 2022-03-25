const { writeToPath } = require("@fast-csv/format");
const logger = require("./logWinston");
const fs = require("fs");

module.exports = function logsToCSV() {
  //  example data:
  // const data = [
  //   { name: "Stevie", id: 10 },
  //   { name: "Ray", id: 20 },
  // ];
  // var dataArr = [];
  // const options = { headers: true, quoteColumns: true };
  // fs.readFile("logs/combined.log", "utf8", function (err, data) {
  //   data.split("\n").forEach((line) => {
  //     dataArr.push(JSON.stringify(line));
  //   });
  // });
  // console.log("DATA AR222222R [[[[----- ", dataArr);
  // writeToPath("/logs/combined.log", data, options)
  //   .on("error", (err) => logger.error(err))
  //   .on("finish", () => logger.log("Done writing."));
};
