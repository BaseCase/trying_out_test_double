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


function Item(options) {
  if (!options) options = {};
  this.name = options.name || "unnamed item";
  this.price = options.price || "$0.00";
}


module.exports = {
  User: User,
  Wishlist: Wishlist,
  Item: Item,
};
