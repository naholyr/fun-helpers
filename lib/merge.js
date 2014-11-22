"use strict";

var merge = require("./utils/merge");

module.exports = function (obj2) {
  return function (obj1) {
    return merge({}, obj1, obj2);
  };
};
