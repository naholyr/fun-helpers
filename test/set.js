"use strict";

var expect = require("chai").expect;

var F = require("../");

it("set", function () {
  var f = F.set("y", 2);
  expect(f).to.be.a("function");
  var o = {x: 1, y: 1};
  expect(f(o)).to.eql({x: 1, y: 2});
  expect(o).to.eql({x: 1, y: 2}); // does mutate
});
