Trying out [testdouble.js](https://github.com/testdouble/testdouble.js).


## Sample app
The sample app is a wishlist program, basically Amazon wishlists crossed with a
wedding registry. Kept the code fairly messy (e.g. all prod code in one file,
yikes!) b/c the main point was to try out a library.


## Notes on the testdouble.js library
* I like that it's minimal. Sinon is what I typically use for JS test doubles,
but I almost never need the whole kitchen sink.
* Auto-stubbing all methods on a class is rad.
* The `when` (especially if I'd imported it as a top-level function instead of
leaving it on `td`) chaining goes down nice and smooth.


### Stuff I didn't try
* Stubbing with different responses to specific args
* built-in or custom matchers


### Verdict
I like it! Next time I start up a larger project I will try to grab
testdouble.js instead of my usual sinon and see how it goes :)
