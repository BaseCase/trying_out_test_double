Trying out [testdouble.js](https://github.com/testdouble/testdouble.js).


## Sample app
The sample app is a wishlist program, basically Amazon wishlists crossed with a
wedding registry.


## Features
* A user can have their own wishlist, to which they can add and remove items.

* An item in another user's wishlist can be "dibsed" to denote that the dibsing
user intends to buy it. The wishlist owner can't tell who dibsed their items.

* (todo) A user can request to see who dibsed an item, and that user can respond yes
or no to the request to reveal who they are.

* (todo) Items can be marked as "received" and the gifting user gets kudos for that.


## Notes on the library
* The docs say I should be able to name my td objects and get that name back in error messages, but when I do
```javascript
var bob = td.create('bob');
var item = { set_dibs: td.create() };
```

and then later:

```javascript
td.verify(item.set_dibs(bob));

```

the error message I get says:

```
Error: Unsatisfied verification on test double.

  Wanted:
    - called with `(undefined)`.

  But there were no invocations of the test double.
```
