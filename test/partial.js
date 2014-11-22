"use strict";

var expect = require("chai").expect;

var F = require("../");

it("partial", function () {
  function calculate (a, b, c) {
    return a * b / c;
  }

  var f = F.partial(calculate, 3, 4);
  expect(f).to.be.a("function");
  expect(f(1)).to.equal(12);
  expect(f(3)).to.equal(4);

  expect(F.partial(calculate)(3, 4, 2)).to.equal(calculate(3, 4, 2));
  expect(F.partial(calculate, 3)(4, 2)).to.equal(calculate(3, 4, 2));
  expect(F.partial(calculate, 3, 4)(2)).to.equal(calculate(3, 4, 2));
  expect(F.partial(calculate, 3, 4, 2)()).to.equal(calculate(3, 4, 2));
});
