"use strict";

var expect = require("chai").expect;

var F = require("../");

it("unset", function () {
  var f = F.unset("y");
  expect(f).to.be.a("function");
  var o = {x: 1, y: 1};
  expect(f(o)).to.eql({x: 1});
  expect(o).to.eql({x: 1}); // does mutate
});
