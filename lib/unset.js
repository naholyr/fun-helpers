"use strict";

var merge = require("./utils/merge");

module.exports = function (property) {
  return function (obj) {
    var result = merge({}, obj);
    delete result[property];

    return result;
  };
};
