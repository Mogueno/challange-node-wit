const logsToCSV = require("./logsToCSV");
const { SimpleIntervalJob, Task } = require("toad-scheduler");

module.exports = function startScheduler(scheduler) {
  if (global.shouldSaveLogs) {
    const task = new Task("logsToCSV", () => logsToCSV());

    const job = new SimpleIntervalJob(
      { seconds: global.saveLogsTime, runImmediately: true },
      task,
      "logsToCSV"
    );
    scheduler.addSimpleIntervalJob(job);
    scheduler.startById("logsToCSV");
  } else {
    scheduler.removeById("logsToCSV");
  }
};
