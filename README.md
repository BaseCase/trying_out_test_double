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
* The `when` (especially if I'd imported it as a top-level function instead of
leaving it on `td`) chaining goes down nice and smooth.

### Eh stuff
* I wasn't initially 100% sold on actually *calling* the double inside
`td.when`. On one hand, I like that I can exactly match the way the call
signature looks, and I like that it means I only have to pass one arg to
`when`. On the other hand, I'm used to writing uncalled function literals for
other test libs already so the inconsistency is sort of weird. After typing
the last sentence out, though, I'm leaning towards "this is smoother and I
like it more, so it's cool."

* I have no idea how I'd improve this (e.g. I don't like sinon's way any
better) but I want all my tests to end with an assertion (in my case chai's
`expect`). When I'm calling `verify` I wish I could hook that up to real
assertions in a way that wasn't too clunky. *(**UPDATE**: As @jasonkarns points out
in [#1], `sinon-chai` is the way you get nice assertions on sinon doubles, so an
equivalent (separate) library would make sense for testdouble. I may look into
this :) )*

### Stuff I didn't try
* Stubbing with different responses to specific args
* built-in or custom matchers

### possible bug? (nope!)
*(UPDATE: Per a Twitter convo, this is not a bug. The `verify` function prints
the name of the double being verified, not its argument. I open [an
issue](https://github.com/testdouble/testdouble.js/issues/21) to discuss a
possible improvement there.)*

The docs say I should be able to name my td objects and get that name back in
error messages, but when I do

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


### Verdict
I like it! Next time I start up a larger project I will try to grab
testdouble.js instead of my usual sinon and see how it goes :)
