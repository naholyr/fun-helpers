"use strict";

var expect = require("chai").expect;

var F = require("../");

it("resolve", function () {
  var f = F.resolve(42);

  expect(f).to.be.a("function");
  expect(f()).to.equal(42);
  expect(f(null)).to.equal(42);
  expect(f(true)).to.equal(42);
  expect(f(33)).to.equal(42);
});
