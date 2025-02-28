const sinon = require("sinon");
const chai = require("chai");
const { expect } = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
const rewire = require("rewire");

const mongoose = require("mongoose");
const { describe, it } = require("mocha");

const sandbox = sinon.createSandbox();

let itemController = rewire("../controllers/item.controller");

describe("Testing /item endpoint", () => {
  let findOneStub;
  let itemMock;
  const hashMock = "1234567891";
  beforeEach(() => {
    itemMock = {
      name: "fake item",
      price: 10,
      rating: "5",
      hash: hashMock,
    };
    findOneStub = sandbox.stub(mongoose.Model, "findOne").resolves(itemMock);
  });
  afterEach(() => {
    itemController = rewire("../controllers/item.controller");
    sandbox.restore();
  });
  describe("readItem", () => {
    it("should return error when called wihtout a hash", async () => {
      return itemController.readItem().catch((err) => {
        expect(err).to.be.an("error");
        expect(err.message).to.equal("Invalid item id");
      });
      //   itemController
      //     .readItem()
      //     .then(() => {
      //       throw new Error("unexpected success");
      //     })
      //     .catch((err) => {
      //       expect(result).to.be.instanceOf(Error);
      //       expect(err.message).to.equal("Invalid item id");
      //     });
    });
    it("should succeed when called with a hash", async () => {
      const result = await itemController.readItem("test");
      expect(result).to.equal(itemMock);
    });
  });

  describe("createItem", () => {
    let itemModelStub, saveStub, result;

    beforeEach(async () => {
      saveStub = sandbox.stub().returns(itemMock);
      itemModelStub = sandbox.stub().returns({
        save: saveStub,
      });

      itemController.__set__("Item", itemModelStub);
    });

    it("should throw invalid argument error", () => {
      itemController
        .createItem()
        .then(() => {
          throw new Error("⚠️ Unexpected success!");
        })
        .catch((err) => {
          expect(result).to.be.instanceOf(Error);
          expect(err.message).to.equal("Invalid arguments");
        });
    });

    it("should create item successfully", async () => {
      result = await itemController.createItem(itemMock);
      expect(itemModelStub).to.have.been.calledWithNew;
      expect(itemModelStub).to.have.been.calledWith(itemMock);
      expect(saveStub).to.have.been.called;
      expect(result).to.equal(itemMock);
    });
  });
});
