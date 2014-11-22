"use strict";

var expect = require("chai").expect;

var F = require("../");

it("reduce", function () {
  function div (a, b) {
    return a / b;
  }

  var f = F.reduce(div);
  expect(f).to.be.a("function");
  var a = [16, 4, 2]; // (16 / 4 = 4) / 2 = 2
  expect(f(a)).to.eql(2);
});
