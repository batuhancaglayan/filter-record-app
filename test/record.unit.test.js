const {
  createCountQuery,
  createDateQuery,
} = require("../src/util/record-aggregate");

test("Test for checking createDateQuery method non-empty parameters", () => {
  var createdQuery = createDateQuery("2017-01-24", "2017-01-31");
  var expectedQuery = {
    createdAt: {
      $gte: new Date("2017-01-24T00:00:00.000Z"),
      $lt: new Date("2017-01-31T00:00:00.000Z"),
    },
  };

  expect(createdQuery).toMatchObject(expectedQuery);
});

test("Test for checking createDateQuery method empty parameters", () => {
  var createdQuery = createDateQuery(undefined, undefined);

  expect(createdQuery).toMatchObject({});
});

test("Test for checking createCountQuery method non-empty parameters", () => {
  var createdQuery = createCountQuery(2000, 3000);
  var expectedQuery = {
    totalCount: { $gte: 2000, $lt: 3000 },
  };

  expect(createdQuery).toMatchObject(expectedQuery);
});

test("Test for checking createCountQuery method empty parameters", () => {
  var createdQuery = createCountQuery(undefined, undefined);

  expect(createdQuery).toMatchObject({});
});
