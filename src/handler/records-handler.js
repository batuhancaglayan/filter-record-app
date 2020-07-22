/**
 * Record collection filter express route.
 */

const express = require('express');
const router = express.Router();

const { buildSuccessResponse } = require('../util/response-builder');
const { asyncWrapper } = require('../util/async-wrapper');
const { queryRecords } = require('../business/records-business');
const { validateRecordFilterRequest } = require('../model/validation/record-filter-validation-model');

/**
 * Request handler for record filter
 */
router.post(
  "/",
  validateRecordFilterRequest,
  asyncWrapper(async (req, res, next) => {
    const { startDate, endDate, minCount, maxCount } = req.body;

    const records = await queryRecords({
      startDate,
      endDate,
      minCount,
      maxCount,
    });

    res.json(buildSuccessResponse(records));
  })
);

module.exports = router;
