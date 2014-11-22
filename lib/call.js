"use strict";

module.exports = function (method) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function (obj) {
    return obj[method].apply(obj, args);
  };
};
