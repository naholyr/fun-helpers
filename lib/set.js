"use strict";

module.exports = function (property, value) {
  return function (obj) {
    obj[property] = value;
    return obj;
  };
};
