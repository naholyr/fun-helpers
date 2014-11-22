"use strict";

var expect = require("chai").expect;

var F = require("../");

it("ifndef", function () {
  var f = F.ifndef(function () {
    return 42;
  });

  expect(f).to.be.a("function");
  expect(f(false)).to.equal(false);
  expect(f(null)).to.equal(42);
  expect(f()).to.equal(42);
  expect(f(33)).to.equal(33);

  f = F.ifndef(42);

  expect(f).to.be.a("function");
  expect(f(false)).to.equal(false);
  expect(f(null)).to.equal(42);
  expect(f()).to.equal(42);
  expect(f(33)).to.equal(33);
});
