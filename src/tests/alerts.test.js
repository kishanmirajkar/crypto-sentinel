const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Alert = require("../models/Alert");

beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/test-db");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

test("Create alert", async () => {
  const res = await request(app)
    .post("/alerts")
    .send({ coin: "bitcoin", targetPrice: 100000 });

  expect(res.status).toBe(201);
  expect(res.body.status).toBe("ACTIVE");
});

test("List alerts", async () => {
  const res = await request(app).get("/alerts");
  expect(res.status).toBe(200);
});
