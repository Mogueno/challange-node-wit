const winston = require("winston");

const files = new winston.transports.File({ filename: "logs/combined.log" });
const console = new winston.transports.Console();

module.exports = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});
