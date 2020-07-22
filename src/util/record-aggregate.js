/**
 * mongo aggregate query helper methods.
 */

const createDateQuery = (startDate, endDate) => {
  let query = {};
  if (!startDate && !endDate) {
    return query;
  }

  return {
    createdAt: {
      $gte: new Date(startDate),
      $lt: new Date(endDate),
    },
  };
};

const createCountQuery = (minCount, maxCount) => {
  let query = {};
  if (!minCount && !maxCount) {
    return query;
  }

  let subQuery = {};
  if (minCount) {
    subQuery.$gte = Number(minCount);
  }

  if (maxCount) {
    subQuery.$lt = Number(maxCount);
  }

  query.totalCount = subQuery;
  return query;
};

module.exports = {
  createDateQuery,
  createCountQuery,
};
