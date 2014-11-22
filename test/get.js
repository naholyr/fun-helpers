"use strict";

var expect = require("chai").expect;

var F = require("../");

it("get", function () {
  var f = F.get("y");
  expect(f).to.be.a("function");
  var o = {x: 1, y: 2};
  expect(f(o)).to.equal(2);
});
