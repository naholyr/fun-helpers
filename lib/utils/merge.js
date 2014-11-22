"use strict";

module.exports = function merge (target) {
  for (var i = 1; i < arguments.length; i++) {
    for (var k in arguments[i]) {
      if (arguments[i].hasOwnProperty(k)) {
        target[k] = arguments[i][k];
      }
    }
  }

  return target;
};
