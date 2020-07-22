const request = require("supertest");
const app = require("../src/app");
const { ErrorCode } = require("../src/util/response-builder");

jest.setTimeout(30000);
describe("POST / ", () => {
  test("Test for checking the empty payload", async () => {
    const response = await request(app).post("/records").send({});

    expect(response.body.code).toEqual(ErrorCode.SUCCESS.value);
    expect(response.statusCode).toBe(200);
  });
});

describe("POST / ", () => {
  test("Test for checking maximum count numeric format", async () => {
    const response = await request(app).post("/records").send({
      startDate: "2017-01-24",
      endDate: "2017-01-31",
      minCount: 2000,
      maxCount: "2101aaaa",
    });

    expect(response.body.code).toEqual(ErrorCode.ERROR.value);
    expect(response.statusCode).toBe(400);
  });
});

describe("POST / ", () => {
  test("Test for checking minimum count numeric format", async () => {
    const response = await request(app).post("/records").send({
      startDate: "2017-01-24",
      endDate: "2017-01-31",
      minCount: "2000cc",
      maxCount: 2101,
    });

    expect(response.body.code).toEqual(ErrorCode.ERROR.value);
    expect(response.statusCode).toBe(400);
  });
});

describe("POST / ", () => {
  test("Test for checking start and end date format", async () => {
    const response = await request(app).post("/records").send({
      startDate: "2017-13-24",
      endDate: "InvalidStr",
      minCount: 2000,
      maxCount: 2101,
    });

    expect(response.body.code).toEqual(ErrorCode.ERROR.value);
    expect(response.statusCode).toBe(400);
  });
});

describe("POST / ", () => {
  test("Test for checking operation of filters", async () => {
    const response = await request(app).post("/records").send({
      "startDate": "2017-01-28",
      "endDate": "2018-01-29",
      "minCount": 100,
      "maxCount": 130
    });

    expect(response.body.records).toEqual([{
      "key": "TAKwGc6Jr4i8Z487",
      "createdAt": "2017-01-28T01:22:14.398Z",
      "totalCount": 120
    }]);

    expect(response.body.code).toEqual(ErrorCode.SUCCESS.value);
    expect(response.body.msg).toEqual(ErrorCode.SUCCESS.key);
    expect(response.statusCode).toBe(200);
  });
});

