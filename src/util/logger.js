/**
 * winston logger configuration made in here.
 */

const { createLogger, format, transports } = require('winston');

module.exports = {
    logger: createLogger({
        level: 'debug',
        format: format.simple(),
        transports: [new transports.Console()]
    })
};

