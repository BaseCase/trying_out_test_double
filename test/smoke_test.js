var expect = require('chai').expect;
var hi = require('../src/wishlist').hi;

describe("unit tests", function() {
  it("works?", function() {
    expect(hi()).to.equal(42);
  });
});
