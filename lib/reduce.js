"use strict";

module.exports = function (reductor) {
  return function (a) {
    return a.reduce(reductor);
  };
};
