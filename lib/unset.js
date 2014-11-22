"use strict";

module.exports = function (property) {
  return function (obj) {
    delete obj[property];
    return obj;
  };
};
