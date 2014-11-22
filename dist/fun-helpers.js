(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = {
  "all": require("./lib/all"),
  "any": require("./lib/any"),
  "call": require("./lib/call"),
  "defaults": require("./lib/defaults"),
  "equals": require("./lib/equals"),
  "every": require("./lib/every"),
  "filter": require("./lib/filter"),
  "get": require("./lib/get"),
  "isA": require("./lib/isA"),
  "is": require("./lib/is"),
  "map": require("./lib/map"),
  "merge": require("./lib/merge"),
  "not": require("./lib/not"),
  "partial": require("./lib/partial"),
  "reduce": require("./lib/reduce"),
  "reduceRight": require("./lib/reduceRight"),
  "set": require("./lib/set"),
  "some": require("./lib/some"),
  "unset": require("./lib/unset")
};

},{"./lib/all":2,"./lib/any":3,"./lib/call":4,"./lib/defaults":5,"./lib/equals":6,"./lib/every":7,"./lib/filter":8,"./lib/get":9,"./lib/is":10,"./lib/isA":11,"./lib/map":12,"./lib/merge":13,"./lib/not":14,"./lib/partial":15,"./lib/reduce":16,"./lib/reduceRight":17,"./lib/set":18,"./lib/some":19,"./lib/unset":20}],2:[function(require,module,exports){
module.exports = require("./every");

},{"./every":7}],3:[function(require,module,exports){
module.exports = require("./some");

},{"./some":19}],4:[function(require,module,exports){
"use strict";

module.exports = function (method) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function (obj) {
    return obj[method].apply(obj, args);
  };
};

},{}],5:[function(require,module,exports){
"use strict";

var merge = require("./utils/merge");

module.exports = function (obj1) {
  return function (obj2) {
    return merge({}, obj1, obj2);
  };
};

},{"./utils/merge":21}],6:[function(require,module,exports){
module.exports = require("./is");

},{"./is":10}],7:[function(require,module,exports){
"use strict";

module.exports = function (test) {
  return function (a) {
    return a.every(test);
  };
};

},{}],8:[function(require,module,exports){
"use strict";

module.exports = function (test) {
  return function (a) {
    return a.filter(test);
  };
};

},{}],9:[function(require,module,exports){
"use strict";

module.exports = function (property) {
  return function (obj) {
    return obj[property];
  };
};

},{}],10:[function(require,module,exports){
"use strict";

module.exports = function (obj1) {
  return function (obj2) {
    return obj1 === obj2;
  };
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = function (type) {
  return function (value) {
    if (typeof type === "function" && typeof value === "object") {
      return value instanceof type;
    } else {
      return typeof value === type;
    }
  };
};

},{}],12:[function(require,module,exports){
"use strict";

module.exports = function (transform) {
  return function (a) {
    return a.map(transform);
  };
};

},{}],13:[function(require,module,exports){
"use strict";

var merge = require("./utils/merge");

module.exports = function (obj2) {
  return function (obj1) {
    return merge({}, obj1, obj2);
  };
};

},{"./utils/merge":21}],14:[function(require,module,exports){
"use strict";

module.exports = function (fn) {
  return function () {
    return !fn.apply(this, arguments);
  };
};

},{}],15:[function(require,module,exports){
"use strict";

module.exports = function (fn) {
  var fixedArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    var dynArgs = Array.prototype.slice.call(arguments);
    return fn.apply(this, fixedArgs.concat(dynArgs));
  };
};

},{}],16:[function(require,module,exports){
"use strict";

module.exports = function (reductor) {
  return function (a) {
    return a.reduce(reductor);
  };
};

},{}],17:[function(require,module,exports){
"use strict";

module.exports = function (reductor) {
  return function (a) {
    return a.reduceRight(reductor);
  };
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = function (property, value) {
  return function (obj) {
    obj[property] = value;
    return obj;
  };
};

},{}],19:[function(require,module,exports){
"use strict";

module.exports = function (test) {
  return function (a) {
    return a.some(test);
  };
};

},{}],20:[function(require,module,exports){
"use strict";

module.exports = function (property) {
  return function (obj) {
    delete obj[property];
    return obj;
  };
};

},{}],21:[function(require,module,exports){
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

},{}]},{},[1]);