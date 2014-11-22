"use strict";

module.exports = function (test) {
  return function (a) {
    return a.every(test);
  };
};
