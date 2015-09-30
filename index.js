var chalk = require('chalk')
  , _     = require('lodash')
  ;

var loggerFn = function(styleFn, msg) {
  console.log(styleFn(msg));
}

var superloggr = {
  trace: function() { loggerFn(chalk.bgBlack.white.dim, _.flatten(Array.prototype.slice.call(arguments)).join('\n')) },
  debug: function() { loggerFn(chalk.bgBlack.cyan.underline, _.flatten(Array.prototype.slice.call(arguments)).join('\n')) },
  info:  function() { loggerFn(chalk.bgBlack.green, _.flatten(Array.prototype.slice.call(arguments)).join('\n')) },
  warn:  function() { loggerFn(chalk.bgBlack.yellow.bold, _.flatten(Array.prototype.slice.call(arguments)).join('\n')) },
  error: function() { loggerFn(chalk.bgBlack.red.bold, _.flatten(Array.prototype.slice.call(arguments)).join('\n')) },
  fire:  function() { loggerFn(chalk.bgRed.white.bold, _.flatten(Array.prototype.slice.call(arguments)).join('\n')) }
};

module.exports = superloggr;