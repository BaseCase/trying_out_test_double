Trying out [testdouble.js](https://github.com/testdouble/testdouble.js).


## Sample app
The sample app is a wishlist program, basically Amazon wishlists crossed with a
wedding registry. Kept the code fairly messy (e.g. all prod code in one file,
yikes!) b/c the main point was to try out a library.


## Features
* A user can have their own wishlist, to which they can add and remove items.

* An item in another user's wishlist can be "dibsed" to denote that the dibsing
user intends to buy it. The wishlist owner can't tell who dibsed their items.

* (todo) A user can request to see who dibsed an item, and that user can respond yes
or no to the request to reveal who they are.

* (todo) Items can be marked as "received" and the gifting user gets kudos for that.


## Notes on the testdouble.js library
### Cool stuff
* I like that it's minimal. Sinon is what I typically use for JS test doubles,
but I almost never need the whole kitchen sink.
* Auto-stubbing all methods on a class is rad.

### Eh stuff
* I wasn't initially 100% sold on actually *calling* the double inside
`td.when`. On one hand, I like that I can exactly match the way the call
signature looks, and I like that it means I only have to pass one arg to
`when`. On the other hand, I'm used to writing uncalled function literals for
other test libs already so the inconsistency is sort of weird. After typing
the last sentence out, though, I'm leaning towards "this is smoother and I
like it more, so it's cool."

### Stuff I didn't try
* Stubbing with different responses to specific args
* built-in or custom matchers

### possible bug?
The docs say I should be able to name my td objects and get that name back in error messages, but when I do

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

Is the "undefined" supposed to be "bob"? It is very possible that I
misunderstood the docs and this is expected.
