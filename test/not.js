"use strict";

var expect = require("chai").expect;

var F = require("../");

it("not", function () {
  function isEven (n) {
    return n % 2 === 0;
  }

  var f = F.not(isEven);
  expect(f).to.be.a("function");
  expect(f(2)).to.equal(!isEven(2));
  expect(f(3)).to.equal(!isEven(3));
});
