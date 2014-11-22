"use strict";

var expect = require("chai").expect;

var F = require("../");

it("reduceRight", function () {
  function div (a, b) {
    return a / b;
  }

  var f = F.reduceRight(div);
  expect(f).to.be.a("function");
  var a = [2, 4, 16]; // (16 / 4 = 4) / 2 = 2
  expect(f(a)).to.eql(2);
});
