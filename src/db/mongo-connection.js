/**
 * Connect to mongodb using with mongoose library.
 * mongoose configuration made in here.
 */

const mongoose = require("mongoose");
const config = require("config");
const { logger } = require('../util/logger');

var conStr = config.get('mongoProtocol') + config.get('mongoUserName') +":"+ config.get('mongoPassword')+'@'+ config.get('mongoAddress') + "/" + config.get('mongoDbName');
mongoose.connect(conStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.on("error", () => {
    logger.info("Connection can not be established with mongodb for address => " + config.get('mongoAddress'))
});

connection.once("open", () => {
    logger.info("Connection established with mongodb.");
});

module.exports = mongoose;