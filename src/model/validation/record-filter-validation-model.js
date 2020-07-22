/**
 * Input validation rules for request record filter.
 */

const { check } = require("express-validator");

function isValidDate(value) {
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;

  const date = new Date(value);
  if (!date.getTime()) return false;
  return date.toISOString().slice(0, 10) === value;
}

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
    .custom(isValidDate)
    .withMessage("startDate can only take date values."),
  check("endDate")
    .optional()
    .custom(isValidDate)
    .withMessage("endDate can only take date values."),
];

module.exports = {
  isValidDate,
  validateRecordFilterRequest,
};
