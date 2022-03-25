const { writeToPath } = require("@fast-csv/format");
const logger = require("./logWinston");

module.exports = function logsToCSV(data) {
  const path = `${__dirname}/logs.csv`;
  //  example data:
  //  const data = [
  //     { name: "Stevie", id: 10 },
  //     { name: "Ray", id: 20 },
  //   ];
  const options = { headers: true, quoteColumns: true };

  writeToPath(path, data, options)
    .on("error", (err) => logger.error(err))
    .on("finish", () => logger.log("Done writing."));
};
