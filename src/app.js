/**
 * express configurations made in here.
 * express routes configured in here
 * swagger configuration made in here
 */

const express = require('express');
const cookieParser = require('cookie-parser');
const recordsHandler = require('./handler/records-handler');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');
const { apiErrorHandler } = require('./handler/error-handler');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/record', recordsHandler);
app.use('/api-docs', (req, res, next) => {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());

app.use(apiErrorHandler)

module.exports = app;
