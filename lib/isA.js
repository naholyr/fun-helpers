"use strict";

module.exports = function (type) {
  return function (value) {
    if (typeof type === "function" && typeof value === "object") {
      return value instanceof type;
    } else {
      return typeof value === type;
    }
  };
};
