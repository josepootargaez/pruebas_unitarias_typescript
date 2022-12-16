const app = require("./index");
const request = require("supertest");

describe("GET /ping", () => {
  test("test response status code with 200 ", async () => {
    const response = await request(app).get("/ping").send();
    expect(response.statusCode).toBe(200)
  });
});


describe("post /createUser", () => {
  test("test response status code with 201 ", async () => {
    const payload ={
      name:"eduardo",
      email:"eduardo@hotmail.com"
  }
 const response = await request(app).post("/createUser").send(payload);
    expect(response.statusCode).toBe(201)
  });
});

describe("delete /deleteUser by id", () => {
  test("test response status code with 204 ", async () => {
    const id = 1;
    const response = await request(app).delete(`/deleteUser/${id}`).send();
    expect(response.statusCode).toBe(204)
  });
});

describe("patch /updateUser by id", () => {
  test("test response status code with 204 ", async () => {
    const payload ={
      name:"eduardo",
      email:"eduardo@hotmail.com"
  }
    const id = 1;
    const response = await request(app).patch(`/updateUser/${id}`).send(payload);
    expect(response.statusCode).toBe(204)
  });
});