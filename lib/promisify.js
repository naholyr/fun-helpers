module.exports = function promisify (fn, PromiseImpl) {
  if (!PromiseImpl) {
    if (typeof Promise !== "function") {
      throw new Error("No native Promise implementation found, please provide one");
    }
    PromiseImpl = Promise;
  }

  return function () {
    var args = Array.prototype.slice.call(arguments);
    var self = this;
    return new PromiseImpl(function (res, rej) {
      args.push(function (err, result) {
        (err ? rej : res)(err || result);
      });
      fn.apply(self, args);
    });
  };
}

