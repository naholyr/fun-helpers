"use strict";

var expect = require("chai").expect;

var F = require("../");

it("merge", function () {
  var f = F.merge({z: 4, w: 4});
  expect(f).to.be.a("function");
  var o = {x: 1, y: 2, z: 3};
  expect(f(o)).to.eql({x: 1, y: 2, z: 4, w: 4});
  expect(o).to.eql({x: 1, y: 2, z: 3}); // does not mutate
});
