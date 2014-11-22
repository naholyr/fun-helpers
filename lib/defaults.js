"use strict";

var merge = require("./utils/merge");

module.exports = function (obj1) {
  return function (obj2) {
    return merge({}, obj1, obj2);
  };
};
