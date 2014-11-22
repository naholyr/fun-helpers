"use strict";

var merge = require("./utils/merge");

module.exports = function (property, value) {
  var obj2 = {};
  obj2[property] = value;

  return function (obj) {
    return merge({}, obj, obj2);
  };
};
