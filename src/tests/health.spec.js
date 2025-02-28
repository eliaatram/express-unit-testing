const { describe, before, beforeEach, afterEach } = require("mocha");
const {
  healthCheckSync,
  healthCheckAsync,
} = require("../controllers/health.controller");
const { expect } = require("chai");

describe("Test /health", () => {
  /**
   * common hooks
   */

  before("before", () => {
    console.log("Ran before all the test suites");
  });
  after("after", () => {
    console.log("Ran after all the test suites");
  });
  beforeEach("beforeEach", () => {
    console.log("Ran before EACH all the test suites");
  });
  afterEach("afterEach", () => {
    console.log("Ran after EACH all the test suites");
  });

  describe("Health check on /sync", () => {
    it("health should be okay", () => {
      const result = healthCheckSync();
      expect(result).to.equal("OK");
    });
  });
  describe("Health check on /async", () => {
    it("health should be okay", async () => {
      const result = await healthCheckAsync();
      expect(result).to.equal("OK");
    });
  });
});
