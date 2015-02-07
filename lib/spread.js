"use strict";

module.exports = function (foo, self) {
  return function (a) {
    return foo.apply(self, a);
  };
};
