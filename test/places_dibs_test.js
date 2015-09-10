var expect = require('chai').expect;
var td = require('testdouble');

var wishlist = require('../src/wishlist');
var User = wishlist.User;
var Item = wishlist.Item;
var Wishlist = wishlist.Wishlist;
var PlacesDibs = wishlist.PlacesDibs;
var OwnerTriedToDibs = wishlist.OwnerTriedToDibs;
var ItemAlreadyDibsed = wishlist.ItemAlreadyDibsed;


describe('PlacesDibs', function() {
  describe('.on_behalf_of', function() {
    beforeEach(function() {
      this.bob = td.create(User);
      this.wishlist = td.create(Wishlist);
      this.item = td.create(Item);
    });

    it("will dibs an item in one user's list for another user", function() {
      new PlacesDibs(this.wishlist).on_behalf_of(this.bob, this.item);
      td.verify(this.item.set_dibs(this.bob));
    });

    it("won't let a user dibs their own item", function() {
      td.when(this.wishlist.get_owner()).thenReturn(this.bob);
      expect(function() {
        new PlacesDibs(this.wishlist).on_behalf_of(this.bob, this.item);
      }.bind(this)).to.throw(OwnerTriedToDibs);
    });

    it("won't let a user dibs an already-dibsed item", function() {
      td.when(this.item.is_dibsed()).thenReturn(true);
      expect(function() {
        new PlacesDibs(this.wishlist).on_behalf_of(this.bob, this.item);
      }.bind(this)).to.throw(ItemAlreadyDibsed);
    });
  })
});
