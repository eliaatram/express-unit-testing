const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const rewire = require("rewire");
const request = require("supertest");

const healthCheckController = require("../controllers/health.controller");
const itemController = require("../controllers/item.controller");

const sandbox = sinon.createSandbox();

let app = rewire("../app");

describe("Testing routes", () => {
  afterEach(() => {
    app = rewire("../app");
    sandbox.restore();
  });

  describe("/GET /health", () => {
    beforeEach(() => {
      sandbox.stub(healthCheckController, "healthCheckAsync").resolves("Ok");
      sandbox.stub(healthCheckController, "healthCheckSync").returns("Ok");
    });

    it("should succeed", (done) => {
      request(app)
        .get("/health/sync")
        .expect(200)
        .end((err, response) => {
          expect(response.body).to.have.property("health").to.equal("Ok");
          done(err);
        });
    });
    it("should succeed", (done) => {
      request(app)
        .get("/health/async")
        .expect(200)
        .end((err, response) => {
          expect(response.body).to.have.property("health").to.equal("Ok");
          done(err);
        });
    });
  });

  describe("Testing Item routes", () => {
    let itemMock, hash;

    beforeEach(() => {
      hash = "1234567892";
      itemMock = {
        name: "fake item",
        price: 10,
        rating: "5",
        hash: hash,
      };

      sandbox.stub(itemController, "readItem").resolves(itemMock);
    });

    // it("/GET /:hash should successfully return item", (done) => {
    //   request(app)
    //     .get(`/item/${hash}`)
    //     .expect(200)
    //     .end((err, response) => {
    //       expect(response.body)
    //         .to.have.property("message")
    //         .to.equal("Item read successfully!");
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("name")
    //         .to.equal(itemMock.name);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("price")
    //         .to.equal(itemMock.price);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("rating")
    //         .to.equal(itemMock.rating);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("hash")
    //         .to.equal(itemMock.hash);

    //       done(err);
    //     });
    // });

    // it("/POST should successfully create a new item", (done) => {
    //   request(app)
    //     .post(`/item`)
    //     .send(itemMock)
    //     .expect(200)
    //     .end((err, response) => {
    //       expect(response.body)
    //         .to.have.property("message")
    //         .to.equal("Item created successfully!");
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("name")
    //         .to.equal(itemMock.name);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("price")
    //         .to.equal(itemMock.price);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("rating")
    //         .to.equal(itemMock.rating);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("hash")
    //         .to.equal(itemMock.hash);

    //       done(err);
    //     });
    // });

    // it("/PUT should successfully update the hash for a given item", (done) => {
    //   request(app)
    //     .put(`/item`)
    //     .send({hash})
    //     .expect(200)
    //     .end((err, response) => {
    //       expect(response.body)
    //         .to.have.property("message")
    //         .to.equal("Item updated successfully!");
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("name")
    //         .to.equal(itemMock.name);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("price")
    //         .to.equal(itemMock.price);
    //       expect(response.body)
    //         .to.have.property("item")
    //         .to.have.property("rating")
    //         .to.equal(itemMock.rating);
    //       done(err);
    //     });
    // });
  });
});
