"use strict";

var expect = require("chai").expect;

var F = require("../");

it("every", function () {
  function isEven (n) {
    return n % 2 === 0;
  }

  var f = F.every(isEven);
  expect(f).to.be.a("function");
  expect(f([2, 4, 6])).to.be.true;
  expect(f([1, 2, 3])).to.be.false;
  expect(f([1, 3, 5])).to.be.false;
});
