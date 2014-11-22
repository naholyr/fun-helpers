"use strict";

module.exports = function (def) {
  return function (value) {
    if (value === null || typeof value === "undefined") {
      if (typeof def === "function") {
        return def();
      } else {
        return def;
      }
    } else {
      return value;
    }
  };
};
