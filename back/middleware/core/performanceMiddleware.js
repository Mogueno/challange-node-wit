const logger = require("../../util/logWinston");

module.exports = function performanceMiddleware(req, res, next) {
  const start = process.hrtime();
  res.on("finish", () => {
    var ip = req.socket.remoteAddress;
    var statusCode = res.statusCode;
    const hrend = process.hrtime(start);

    logger.info(
      `[FINISH] Execution time (hr): ${hrend[0]} ${hrend[1] / 1000000}`
    );
    logger.info(`IP: ${ip}`);
    logger.info(`Status Code: ${statusCode}`);

    var uniqueID = res.get("unique-id");
    uniqueID
      ? logger.info(`Unique ID: ${uniqueID}`)
      : logger.info(`Unique ID: ${req.query.uniqueID}`);
  });

  next();
};
