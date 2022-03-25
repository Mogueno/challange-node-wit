const { writeToPath } = require("@fast-csv/format");

module.exports = function saveToCSV(data) {
  const path = `${__dirname}/logs.csv`;
  //  example data:
  //  const data = [
  //     { name: "Stevie", id: 10 },
  //     { name: "Ray", id: 20 },
  //   ];
  const options = { headers: true, quoteColumns: true };

  writeToPath(path, data, options)
    .on("error", (err) => console.error(err))
    .on("finish", () => console.log("Done writing."));
};
