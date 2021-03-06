"use strict";

module.exports = function (fn) {
  return function () {
    return !fn.apply(this, arguments);
  };
};
