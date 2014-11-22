"use strict";

module.exports = function (fn) {
  return function (value) {
    fn(value);
    return value;
  };
};
