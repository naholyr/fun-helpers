"use strict";

var expect = require("chai").expect;

var F = require("../");

it("is", function () {
  var f = F.neutral(function () {
    return 32;
  });

  expect(f).to.be.a("function");
  expect(f(42)).to.equal(42);
  expect(f()).to.be.undefined;
});
