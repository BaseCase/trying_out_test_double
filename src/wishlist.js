function User(options) {
  if (!options) options = {};
  this.name = options.name || "Name me plz";
}


function Wishlist(options) {
  if (!options) options = {};
  this.owner = options.owner || null;
  this.items = [];
}

Wishlist.prototype.add_item = function(item) {
  this.items.push(item);
};

Wishlist.prototype.remove_item = function(item_id) {
  this.items.pop(); // not the right thing, but it's just a little test app so eh
};

Wishlist.prototype.get_owner = function() {
  return this.owner;
};


//cowboyed Item methods cuz yolo
function Item(options) {
  if (!options) options = {};
  this.name = options.name || "unnamed item";
  this.price = options.price || "$0.00";
}

Item.prototype.set_dibs = function(user) {
  this.dibser = user;
};

Item.prototype.is_dibsed = function() {
  return !!this.dibser;
};

Item.prototype.get_dibser = function() {
  return this.dibser;
};


function PlacesDibs(wishlist) {
  this.wishlist = wishlist;
}

PlacesDibs.prototype.on_behalf_of = function(user, item) {
  if (item.is_dibsed()) {
    throw new ItemAlreadyDibsed();
  }

  if (this.wishlist.get_owner() === user) {
    throw new OwnerTriedToDibs();
  }
  item.set_dibs(user);
};


function OwnerTriedToDibs() {}
function ItemAlreadyDibsed() {}


module.exports = {
  User: User,
  Wishlist: Wishlist,
  Item: Item,
  PlacesDibs: PlacesDibs,
  OwnerTriedToDibs: OwnerTriedToDibs,
  ItemAlreadyDibsed: ItemAlreadyDibsed,
};
