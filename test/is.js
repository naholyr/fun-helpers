"use strict";

var expect = require("chai").expect;

var F = require("../");

it("is", function () {
  var o = {x: 1, y: 2};
  var f = F.is(o);
  expect(f).to.be.a("function");
  expect(f(o)).to.be.true;
  expect(f({x: 1, y: 2})).to.be.false; // strict equality
  expect(F.is("a string")("a string")).to.be.true;
});
