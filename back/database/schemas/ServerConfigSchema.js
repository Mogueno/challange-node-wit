const mongoose = require("mongoose");

const serverConfigSchema = new mongoose.Schema({
  shouldLogQueries: Boolean,
  shouldSaveLogs: Boolean,
  saveLogsTime: Number,
});

module.exports = mongoose.model("Calculator", serverConfigSchema);
