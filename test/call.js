"use strict";

var expect = require("chai").expect;

var F = require("../");

it("call", function () {
  var f = F.call("foo", 42);
  expect(f).to.be.a("function");

  expect(f({
    foo: function (x) { return x + 1; }
  })).to.equal(43);

  expect(f({
    foo: function () { return 33; }
  })).to.equal(33);

  expect(function () {
    return f({});
  }).to.throw();
});
