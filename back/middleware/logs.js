module.exports = function logs(req, res, next) {
  const start = process.hrtime();
  res.on("finish", () => {
    var ip = req.socket.remoteAddress;
    var statusCode = res.statusCode;

    const hrend = process.hrtime(start);
    console.info(
      "[FINISH] Execution time (hr): %ds %dms",
      hrend[0],
      hrend[1] / 1000000
    );
    console.info("IP: ", ip);
    console.info("Status Code: ", statusCode);
    console.info("UniqueID: ", res.get("unique-id"));
  });

  next();
};
