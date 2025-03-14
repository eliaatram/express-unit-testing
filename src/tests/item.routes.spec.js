const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const Item = require("../models/Item.model");
const { expect } = require("chai");

describe("Item routes", () => {
  before(async () => {
      // 0 means disconnected, 1 means connected
      await mongoose.connect("mongodb://localhost:27017/testdb", {
        useNewUrlParser: true,
      });
  });

  after(async () => {
    await Item.deleteMany();
    await mongoose.disconnect();
  });

  describe("POST /item", () => {
    it("should create a new item successfully", async () => {
      const newItem = {
        name: "Test item",
        rating: "4",
        price: 100,
        hash: "testHash12",
      };

      const response = await request(app)
        .post("/item")
        .send(newItem)
        .expect(200);

      expect(response.status).to.equal(200);
    });
  });
});
