"use strict";

module.exports = function (fn) {
  var fixedArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    var dynArgs = Array.prototype.slice.call(arguments);
    return fn.apply(this, fixedArgs.concat(dynArgs));
  };
};
