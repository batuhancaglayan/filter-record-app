/**
 * Record filter process made in here.
 */

const {
  createCountQuery,
  createDateQuery,
} = require("../util/record-aggregate");

const Record = require("../model/mongo/record-model");

const queryRecords = async ({ startDate, endDate, minCount, maxCount }) => {
  const matchedRecords = await Record.aggregate()
    .match(createDateQuery(startDate, endDate))
    .project({
      _id: 0,
      key: 1,
      createdAt: 1,
      totalCount: { $sum: "$counts" },
    })
    .match(createCountQuery(minCount, maxCount));

  return matchedRecords;
};

module.exports = {
  queryRecords,
};
