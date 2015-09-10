var expect = require('chai').expect;

var wishlist = require('../src/wishlist');
var User = wishlist.User;
var Wishlist = wishlist.Wishlist; // lol naming
var Item = wishlist.Item;
var PlacesDibs = wishlist.PlacesDibs;


describe('Wishlist item add/remove integration', function() {
  it("lets a User create a wishlist, add an item to it, and remove an item", function() {
    var alice = new User({ name: "Alice" });
    var wishlist = new Wishlist({ owner: alice });
    var walkman = new Item({ name: "Sony Walkman", price: "$50.00" });

    wishlist.add_item(walkman);
    expect(wishlist.items[0]).to.equal(walkman);

    wishlist.remove_item(0);
    expect(wishlist.items.length).to.equal(0);
  });
});


describe('Item "dibs" workflow integration', function() {
  it("lets a user 'dibs' an item in a Wishlist list from a different user", function() {
    var alice = new User({ name: "Alice" });
    var bob = new User({ name: "Bob" });
    var wishlist = new Wishlist({ owner: alice });
    var walkman = new Item({ name: "Sony Walkman", price: "$50.00" });
    wishlist.add_item(walkman);

    new PlacesDibs(wishlist).on_behalf_of(bob, walkman);

    expect(walkman.is_dibsed()).to.be.true;
    expect(walkman.get_dibser()).to.equal(bob);
  });
});

