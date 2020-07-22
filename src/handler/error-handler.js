/**
 * API request error handler middleware.
 */

const { logger } = require("../util/logger");
const { buildErrorResponse } = require("../util/response-builder");

const apiErrorHandler = (err, req, res, next) => {
  let errorMsg = "Unexpected error occured on system.";
  if (!err && !err.message) {
    errorMsg = err.message;
  }

  logger.error(errorMsg);
  res.status(500).send(buildErrorResponse(errorMsg));
};

module.exports = {
  apiErrorHandler,
};
