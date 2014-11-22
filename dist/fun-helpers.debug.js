!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Fun=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  "ifndef": require("./lib/ifndef"),
  "isA": require("./lib/isA"),
  "is": require("./lib/is"),
  "map": require("./lib/map"),
  "merge": require("./lib/merge"),
  "neutral": require("./lib/neutral"),
  "not": require("./lib/not"),
  "partial": require("./lib/partial"),
  "reduce": require("./lib/reduce"),
  "reduceRight": require("./lib/reduceRight"),
  "resolve": require("./lib/resolve"),
  "set": require("./lib/set"),
  "some": require("./lib/some"),
  "unset": require("./lib/unset")
};

},{"./lib/all":2,"./lib/any":3,"./lib/call":4,"./lib/defaults":5,"./lib/equals":6,"./lib/every":7,"./lib/filter":8,"./lib/get":9,"./lib/ifndef":10,"./lib/is":11,"./lib/isA":12,"./lib/map":13,"./lib/merge":14,"./lib/neutral":15,"./lib/not":16,"./lib/partial":17,"./lib/reduce":18,"./lib/reduceRight":19,"./lib/resolve":20,"./lib/set":21,"./lib/some":22,"./lib/unset":23}],2:[function(require,module,exports){
module.exports = require("./every");

},{"./every":7}],3:[function(require,module,exports){
module.exports = require("./some");

},{"./some":22}],4:[function(require,module,exports){
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

},{"./utils/merge":24}],6:[function(require,module,exports){
module.exports = require("./is");

},{"./is":11}],7:[function(require,module,exports){
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

module.exports = function (def) {
  return function (value) {
    if (value === null || typeof value === "undefined") {
      if (typeof def === "function") {
        return def();
      } else {
        return def;
      }
    } else {
      return value;
    }
  };
};

},{}],11:[function(require,module,exports){
"use strict";

module.exports = function (obj1) {
  return function (obj2) {
    return obj1 === obj2;
  };
};

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
"use strict";

module.exports = function (transform) {
  return function (a) {
    return a.map(transform);
  };
};

},{}],14:[function(require,module,exports){
"use strict";

var merge = require("./utils/merge");

module.exports = function (obj2) {
  return function (obj1) {
    return merge({}, obj1, obj2);
  };
};

},{"./utils/merge":24}],15:[function(require,module,exports){
"use strict";

module.exports = function (fn) {
  return function (value) {
    fn(value);
    return value;
  };
};

},{}],16:[function(require,module,exports){
"use strict";

module.exports = function (fn) {
  return function () {
    return !fn.apply(this, arguments);
  };
};

},{}],17:[function(require,module,exports){
"use strict";

module.exports = function (fn) {
  var fixedArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    var dynArgs = Array.prototype.slice.call(arguments);
    return fn.apply(this, fixedArgs.concat(dynArgs));
  };
};

},{}],18:[function(require,module,exports){
"use strict";

module.exports = function (reductor) {
  return function (a) {
    return a.reduce(reductor);
  };
};

},{}],19:[function(require,module,exports){
"use strict";

module.exports = function (reductor) {
  return function (a) {
    return a.reduceRight(reductor);
  };
};

},{}],20:[function(require,module,exports){
"use strict";

module.exports = function (value) {
  return function () {
    return value;
  };
};

},{}],21:[function(require,module,exports){
"use strict";

var merge = require("./utils/merge");

module.exports = function (property, value) {
  var obj2 = {};
  obj2[property] = value;

  return function (obj) {
    return merge({}, obj, obj2);
  };
};

},{"./utils/merge":24}],22:[function(require,module,exports){
"use strict";

module.exports = function (test) {
  return function (a) {
    return a.some(test);
  };
};

},{}],23:[function(require,module,exports){
"use strict";

var merge = require("./utils/merge");

module.exports = function (property) {
  return function (obj) {
    var result = merge({}, obj);
    delete result[property];

    return result;
  };
};

},{"./utils/merge":24}],24:[function(require,module,exports){
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsImxpYi9hbGwuanMiLCJsaWIvYW55LmpzIiwibGliL2NhbGwuanMiLCJsaWIvZGVmYXVsdHMuanMiLCJsaWIvZXF1YWxzLmpzIiwibGliL2V2ZXJ5LmpzIiwibGliL2ZpbHRlci5qcyIsImxpYi9nZXQuanMiLCJsaWIvaWZuZGVmLmpzIiwibGliL2lzLmpzIiwibGliL2lzQS5qcyIsImxpYi9tYXAuanMiLCJsaWIvbWVyZ2UuanMiLCJsaWIvbmV1dHJhbC5qcyIsImxpYi9ub3QuanMiLCJsaWIvcGFydGlhbC5qcyIsImxpYi9yZWR1Y2UuanMiLCJsaWIvcmVkdWNlUmlnaHQuanMiLCJsaWIvcmVzb2x2ZS5qcyIsImxpYi9zZXQuanMiLCJsaWIvc29tZS5qcyIsImxpYi91bnNldC5qcyIsImxpYi91dGlscy9tZXJnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTs7QUNEQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJhbGxcIjogcmVxdWlyZShcIi4vbGliL2FsbFwiKSxcbiAgXCJhbnlcIjogcmVxdWlyZShcIi4vbGliL2FueVwiKSxcbiAgXCJjYWxsXCI6IHJlcXVpcmUoXCIuL2xpYi9jYWxsXCIpLFxuICBcImRlZmF1bHRzXCI6IHJlcXVpcmUoXCIuL2xpYi9kZWZhdWx0c1wiKSxcbiAgXCJlcXVhbHNcIjogcmVxdWlyZShcIi4vbGliL2VxdWFsc1wiKSxcbiAgXCJldmVyeVwiOiByZXF1aXJlKFwiLi9saWIvZXZlcnlcIiksXG4gIFwiZmlsdGVyXCI6IHJlcXVpcmUoXCIuL2xpYi9maWx0ZXJcIiksXG4gIFwiZ2V0XCI6IHJlcXVpcmUoXCIuL2xpYi9nZXRcIiksXG4gIFwiaWZuZGVmXCI6IHJlcXVpcmUoXCIuL2xpYi9pZm5kZWZcIiksXG4gIFwiaXNBXCI6IHJlcXVpcmUoXCIuL2xpYi9pc0FcIiksXG4gIFwiaXNcIjogcmVxdWlyZShcIi4vbGliL2lzXCIpLFxuICBcIm1hcFwiOiByZXF1aXJlKFwiLi9saWIvbWFwXCIpLFxuICBcIm1lcmdlXCI6IHJlcXVpcmUoXCIuL2xpYi9tZXJnZVwiKSxcbiAgXCJuZXV0cmFsXCI6IHJlcXVpcmUoXCIuL2xpYi9uZXV0cmFsXCIpLFxuICBcIm5vdFwiOiByZXF1aXJlKFwiLi9saWIvbm90XCIpLFxuICBcInBhcnRpYWxcIjogcmVxdWlyZShcIi4vbGliL3BhcnRpYWxcIiksXG4gIFwicmVkdWNlXCI6IHJlcXVpcmUoXCIuL2xpYi9yZWR1Y2VcIiksXG4gIFwicmVkdWNlUmlnaHRcIjogcmVxdWlyZShcIi4vbGliL3JlZHVjZVJpZ2h0XCIpLFxuICBcInJlc29sdmVcIjogcmVxdWlyZShcIi4vbGliL3Jlc29sdmVcIiksXG4gIFwic2V0XCI6IHJlcXVpcmUoXCIuL2xpYi9zZXRcIiksXG4gIFwic29tZVwiOiByZXF1aXJlKFwiLi9saWIvc29tZVwiKSxcbiAgXCJ1bnNldFwiOiByZXF1aXJlKFwiLi9saWIvdW5zZXRcIilcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2V2ZXJ5XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9zb21lXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9ialttZXRob2RdLmFwcGx5KG9iaiwgYXJncyk7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZXJnZSA9IHJlcXVpcmUoXCIuL3V0aWxzL21lcmdlXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmoxKSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqMikge1xuICAgIHJldHVybiBtZXJnZSh7fSwgb2JqMSwgb2JqMik7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9pc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0ZXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBhLmV2ZXJ5KHRlc3QpO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0ZXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBhLmZpbHRlcih0ZXN0KTtcbiAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqW3Byb3BlcnR5XTtcbiAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZGVmKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAodHlwZW9mIGRlZiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBkZWYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iajEpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmoyKSB7XG4gICAgcmV0dXJuIG9iajEgPT09IG9iajI7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgdHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gdHlwZTtcbiAgICB9XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5tYXAodHJhbnNmb3JtKTtcbiAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lcmdlID0gcmVxdWlyZShcIi4vdXRpbHMvbWVyZ2VcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iajIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmoxKSB7XG4gICAgcmV0dXJuIG1lcmdlKHt9LCBvYmoxLCBvYmoyKTtcbiAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZuKHZhbHVlKTtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICFmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbikge1xuICB2YXIgZml4ZWRBcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZHluQXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGZpeGVkQXJncy5jb25jYXQoZHluQXJncykpO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZWR1Y3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5yZWR1Y2UocmVkdWN0b3IpO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZWR1Y3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICByZXR1cm4gYS5yZWR1Y2VSaWdodChyZWR1Y3Rvcik7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKFwiLi91dGlscy9tZXJnZVwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocHJvcGVydHksIHZhbHVlKSB7XG4gIHZhciBvYmoyID0ge307XG4gIG9iajJbcHJvcGVydHldID0gdmFsdWU7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gbWVyZ2Uoe30sIG9iaiwgb2JqMik7XG4gIH07XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRlc3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgcmV0dXJuIGEuc29tZSh0ZXN0KTtcbiAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lcmdlID0gcmVxdWlyZShcIi4vdXRpbHMvbWVyZ2VcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHJlc3VsdCA9IG1lcmdlKHt9LCBvYmopO1xuICAgIGRlbGV0ZSByZXN1bHRbcHJvcGVydHldO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZSAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yICh2YXIgayBpbiBhcmd1bWVudHNbaV0pIHtcbiAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgdGFyZ2V0W2tdID0gYXJndW1lbnRzW2ldW2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIl19
