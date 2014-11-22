"use strict";

module.exports = function (transform) {
  return function (a) {
    return a.map(transform);
  };
};
