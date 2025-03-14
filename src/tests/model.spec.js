const chai = require("chai");
const expect = chai.expect;
const mongoose = require("mongoose");
const ValidationError = mongoose.Error.ValidationError;

let Item = require("../models/Item.model");

describe("Item Model", () => {
  let itemMock;

  beforeEach(() => {
    itemMock = {
      name: "item",
      price: 10,
      rating: "5",
      hash: "hashGreaterThan10Chars",
    };
  });

  it("should throw an error due to missing fields", (done) => {
    let item = new Item();

    item.validate((err) => {
      expect(err.errors.name).to.exist;
      expect(err.errors.rating).to.exist;
      expect(err.errors.price).to.exist;
      expect(err.errors.hash).to.exist;

      done();
    });
  });

  it("should throw an error due to incorrect hash length", (done) => {
    let item = new Item(itemMock);

    item.validate((err) => {
      if (err) {
        expect(err).to.be.instanceOf(ValidationError);
        done();
      } else {
        const unexpectedSuccess = new Error("unexpected success");
        done(unexpectedSuccess);
      }
    });
  });

  it("should create the item", (done) => {
    const hash = "1234567891";
    let item = new Item({ ...itemMock, hash });

    item.validate((err) => {
      if (err) {
        const unexpectedError = new Error("unexpected error");
        expect(err).to.be.instanceOf(ValidationError);
        done(unexpectedError);
      } else {
        expect(item.hash).to.equal(hash);
        done();
      }
    });
  });
});
