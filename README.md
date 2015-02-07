[![Build Status](https://travis-ci.org/naholyr/fun-helpers.png?branch=master)](https://travis-ci.org/naholyr/fun-helpers)
[![npm version](https://badge.fury.io/js/fun-helpers.svg)](http://badge.fury.io/js/fun-helpers)
[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=naholyr&url=https%3A%2F%2Fgithub.com%2Fnaholyr%2Ffun-helpers&title=Github-Todos&language=javascript&tags=github&category=software)
[![Gittip donate](https://img.shields.io/gratipay/naholyr.svg)](https://gratipay.com/naholyr)

fun-helpers
===========

`fun-helpers` is a small collection of simple functions I've got used to use daily with promises. I finally packaged them here. It's very similar to [fn.js](http://eliperelman.com/fn.js/) or [fun.js](https://github.com/briansorahan/fun-js) except its main purpose is to be "Promise-friendly" and as light as possible (no fancy autoCurry).

What I mean by "Promise-friendly" is that every method of this API returns a single-parameter function, ready to be used in your `then`s. For example `map` will not take two arguments but only one, the mapping function, and will return a function taking an array as parameter and returning the result of applying the mapping function over it.

Example
-------

```js
var lowerNames = getUsers()
  .then(map(get("name"))) // get all users' names
  .then(call("strToLower")) // call method from each string
  .then(neutral(console.log)) // make a function neutral (return its first argument)
```

Compatibility
-------------

Written for Node.js but should be compatible with any modern browser (including Internet Explorer ≥ 9) using `browserify` or the pre-built versions in `dist` folder.

Installation
------------

For Node.js:

```sh
npm install fun-helpers
```

If you target browser and don't use `browserify`, you can download a pre-built standalone version:

* [standard (6.3K)](https://raw.githubusercontent.com/naholyr/fun-helpers/master/dist/fun-helpers.js)
* [minified (5.2K)](https://raw.githubusercontent.com/naholyr/fun-helpers/master/dist/fun-helpers.min.js)
* [sourcemapped for debugging (16K)](https://raw.githubusercontent.com/naholyr/fun-helpers/master/dist/fun-helpers.debug.js)
* If you don't use any loading system, a global variable `Fun` will contain the API.

API
---

Read next section if you don't know how to read this API.

Note: All methods are safe (they do not mutate their input), and will have no side-effect in case of multiple `then`s on same promise.

* **`all(test)`** `any -> boolean` -> `[any] -> boolean`
  * Checks if all elements of the promised array pass the test
* **`any(test)`** `any -> boolean` -> `[any] -> boolean`
  * Checks if any element in the promised array pass the test
* **`call(name, args…)`** `(string, any…)` -> `Object -> any`
  * Calls method "name" of the promised object, with optional additional arguments
* **`defaults(values)`** `Object` -> `Object -> Object`
  * Sets all undefined keys of promised object to those from input object
* **`equals(value)`** `any` -> `any -> boolean`
  * Checks if promised value is identical (triple equal) to input value
* **`every(test)`** is an alias to `all(test)`
* **`filter(test)`** `any -> boolean` -> `[any] -> [any]`
  * Filters promised array, keeping only values passing the test
* **`get(property)`** `string` -> `Object -> any`
  * Returns property by its name from promised object
* **`ifndef(default)`** `-> any` -> `any -> any`
  * Returns default value if promised value is null or undefined (default can be a function returning the value, or directly the fallback value)
* **`isA(type)`** `string or function` -> `any -> boolean`
  * Checks promised value is of the given type (can be a type name or a constructor function)
* **`is(value)`** is an alias to `equals(value)`
* **`map(transform)`** `any -> any` -> `[any] -> [any]`
  * Returns the result of applying transform on every item of promised array
* **`merge`**
  * Sets all keys of promised object (defined or not, it overwrites) to those from input object
* **`neutral(foo)`** `any… -> any` -> `any -> any`
  * Will apply foo on promised value and return promised value, whatever foo was supposed to return
  * This is especially useful for loggers or function that do not return their input and would break the chain
* **`not(foo)`** `any -> boolean` -> `any -> boolean`
  * Applies foo on promised value and returns reversed result
* **`partial(foo, fixedArgs…)`** `(any… -> any), any…` -> `any… -> any`
  * The usual partial tool, will return a function like foo but with the n first parameters fixed
* **`promisify(foo, PromiseImpl)`** `(any…, (Error, any<T>))` -> `any… -> Promise<T>`
  * Transform a callback-style asynchronous function into a function returning a promise (provide `Promise` implementation if no global `Promise` object exists)
* **`reduce(foo)`** `any, any, number, [any] -> any` -> `[any] -> any`
  * Applies [a reduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) on promised array
* **`reduceRight`** is like `reduce` but will work with reversed array
* **`resolve(value)`** `any` -> `any -> any`
  * Returns a function returning the given value whatever its input is.
* **`set(property, value)`** `string, any` -> `Object -> Object`
  * Sets the property of promised object to given value
* **`set(object, property)`** `Object, string` -> `any -> Object`
  * Sets the property of given object to promised value
* **`some`** is an alias to `any(test)`
* **`spread(foo)`** `any… -> any` -> `[any] -> any`
  * Will create a new function accepting a single Array argument, and returning the result of `foo` applied to those spread arguments
  * An additional parameter can be passed to set foo's `this`
* **`unset(property)`** `string` -> `Object -> Object`
  * Deletes property from promised object

### How to read type notation

Notation used here is inspired by (more and more common) Haskell type formatting:

```
(x, y) -> z
```

Can be read as *a function taking two arguments of type x and y, and returning a value of type z*.

Take **`all(test)`** for example:

* **`all`** `(any -> boolean)` -> `[any] -> boolean`

Means **`all`** takes a parameter like `function (anything) { return aBoolean }`, and returns a result like `function (array) { return aBoolean }`.
