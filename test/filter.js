"use strict";

var expect = require("chai").expect;

var F = require("../");

it("filter", function () {
  function isEven (n) {
    return n % 2 === 0;
  }

  var f = F.filter(isEven);
  expect(f).to.be.a("function");
  expect(f([1, 2, 3, 4, 5])).to.eql([2, 4]);
});
