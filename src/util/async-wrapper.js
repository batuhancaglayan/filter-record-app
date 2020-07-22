/**
 * Wrapper method for handle exceptions which occurs in async methods.
 */

const { validationResult } = require("express-validator");
const { buildErrorResponse } = require("./response-builder");
const { logger } = require("./logger");

const asyncWrapper = (callback) => {
  return function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const extractedErrors = [];
      errors
        .array()
        .map((err) => extractedErrors.push({ [err.param]: err.msg }));
      logger.error(
        "400 bad request responsed. " + JSON.stringify(extractedErrors)
      );
      res
        .status(400)
        .send(buildErrorResponse(extractedErrors));
      return;
    }

    callback(req, res, next).catch(next);
  };
};

module.exports = {
  asyncWrapper,
};
