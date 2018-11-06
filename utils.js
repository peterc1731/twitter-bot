const chalk = require('chalk');
const util = require('util');

const logProcess = (message) => {
  const time = new Date().toUTCString();
  console.log(chalk.yellow(`[${time}] ${message}`));
};

const logError = (error) => {
  const time = new Date().toUTCString();
  console.log(chalk.red(`[${time}] Error: ${util.inspect(error)}`));
};

const logSuccess = (message) => {
  const time = new Date().toUTCString();
  console.log(chalk.green(`[${time}] ${message}`));
};

const titleMessage = (message) => {
  console.log(chalk.bold.black.bgGreen(`\n ${message} \n`));
};

const subtitleMessage = (message) => {
  console.log(chalk.bold.black.bgMagenta(`\n\t ${message} \n`));
};

const randomTime = () => Math.floor(1800000 + (5400000 * Math.random()));
module.exports = {
  logError,
  logProcess,
  logSuccess,
  titleMessage,
  subtitleMessage,
  randomTime,
};
