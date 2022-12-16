const app = require("./index");
const request = require("supertest");

describe("GET /ping", () => {
  test("test response status code with 200 ", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.statusCode).toBe(200)
  });
});
