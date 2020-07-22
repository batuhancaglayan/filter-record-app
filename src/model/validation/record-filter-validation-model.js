/**
 * Input validation rules for request record filter.
 */

const { check } = require("express-validator");

const validateRecordFilterRequest = [
  check("minCount")
    .optional()
    .isNumeric()
    .withMessage("minCount can only take numeric values."),
  check("maxCount")
    .optional()
    .isNumeric()
    .withMessage("maxCount can only take numeric values."),
  check("startDate")
    .optional()
    .matches("[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])"),
  check("endDate")
    .optional()
    .matches("[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])"),
];

module.exports = {
  validateRecordFilterRequest,
};
