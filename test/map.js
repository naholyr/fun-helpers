"use strict";

var expect = require("chai").expect;

var F = require("../");

it("map", function () {
  function incr (n) {
    return n + 1;
  }

  var f = F.map(incr);
  expect(f).to.be.a("function");
  expect(f([1, 2, 3])).to.eql([2, 3, 4]);
});
