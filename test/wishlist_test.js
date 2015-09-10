var expect = require('chai').expect;
var td = require('testdouble');

var wishlist = require('../src/wishlist');
var Wishlist = wishlist.Wishlist;


describe('Wishlist', function() {
  beforeEach(function() {
    this.subject = new Wishlist();
  });

  it("can add items", function() {
    var stub = td.create('item');
    this.subject.add_item(stub);
    expect(this.subject.items[this.subject.items.length - 1]).to.equal(stub);
  });

  it("can remove items", function() {
    var stub = td.create('item');
    this.subject.items = [stub];
    this.subject.remove_item(0);
    expect(this.subject.items.length).to.equal(0);
  });
});
