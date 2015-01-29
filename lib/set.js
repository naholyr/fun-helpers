"use strict";

var merge = require("./utils/merge");

module.exports = function (property, value) {
  if (typeof property === "object") {
    // obj = property
    // key = value
    var obj = property;
    return function (val) {
      var obj2 = {};
      obj2[value] = val;
      return merge({}, obj, obj2);
    }
  }

  var obj2 = {};
  obj2[property] = value;

  return function (obj) {
    return merge({}, obj, obj2);
  };
};
