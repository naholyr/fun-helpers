"use strict";

module.exports = function (property) {
  return function (obj) {
    return obj[property];
  };
};
