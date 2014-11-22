"use strict";

var expect = require("chai").expect;

var F = require("../");

it("isA", function () {
  var f = F.isA("string");
  expect(f).to.be.a("function");
  expect(f("a string")).to.be.true;
  expect(f(new String("a string"))).to.be.false; // really, don't do that

  function Clazz () {};
  expect(F.isA(Clazz)(new Clazz)).to.be.true;
  expect(F.isA(Object)(new Clazz)).to.be.true;
  expect(F.isA("object")(new Clazz)).to.be.true;
  expect(F.isA(Clazz)({x: 1, y: 2})).to.be.false;
  expect(F.isA(Object)({x: 1, y: 2})).to.be.true;
  expect(F.isA("object")({x: 1, y: 2})).to.be.true;

  expect(F.isA("number")(33)).to.be.true;
  expect(F.isA(Number)(33)).to.be.false; // either that

  expect(F.isA("boolean")(true)).to.be.true;
  expect(F.isA(Boolean)(true)).to.be.false; // nor that
});
