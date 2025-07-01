(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.RegExtras = {}));
})(this, (function (exports) { 'use strict';

  function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
  }
  function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [null];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return p;
  }
  function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
      var o = r[t];
      o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
  }
  function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), Object.defineProperty(e, "prototype", {
      writable: false
    }), e;
  }
  function _isNativeReflectConstruct() {
    try {
      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function () {
      return !!t;
    })();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r);
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (String )(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }

  /**
   * @param {RegExp} regex
   * @param {string} newFlags
   * @param {Integer} [newLastIndex]
   * @returns {RegExp}
   */
  function mixinRegex(regex, newFlags) {
    var newLastIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : regex.lastIndex;
    newFlags = newFlags || '';
    regex = new RegExp(regex.source, (newFlags.includes('g') ? 'g' : regex.global ? 'g' : '') + (newFlags.includes('i') ? 'i' : regex.ignoreCase ? 'i' : '') + (newFlags.includes('m') ? 'm' : regex.multiline ? 'm' : '') + (newFlags.includes('u') ? 'u' : regex.unicode ? 'u' : '') + (newFlags.includes('y') ? 'y' : regex.sticky ? 'y' : '') + (newFlags.includes('s') ? 's' : regex.dotAll ? 's' : ''));
    regex.lastIndex = newLastIndex;
    return regex;
  }

  exports.RegExtras = /*#__PURE__*/function () {
    function RegExtras(regex, flags, newLastIndex) {
      _classCallCheck(this, RegExtras);
      this.regex = mixinRegex(typeof regex === 'string' ? new RegExp(regex) : mixinRegex(regex), flags || '', newLastIndex);
    }
    return _createClass(RegExtras, [{
      key: "forEach",
      value: function forEach(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var regex = mixinRegex(this.regex, 'g');
        var matches,
          n0,
          i = 0;
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          cb.apply(thisObj, matches.concat(i++, n0));
        }
        return this;
      }
    }, {
      key: "some",
      value: function some(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var regex = mixinRegex(this.regex, 'g');
        var matches,
          ret,
          n0,
          i = 0;
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          ret = cb.apply(thisObj, matches.concat(i++, n0));
          if (ret) {
            return true;
          }
        }
        return false;
      }
    }, {
      key: "every",
      value: function every(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var regex = mixinRegex(this.regex, 'g');
        var matches,
          ret,
          n0,
          i = 0;
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          ret = cb.apply(thisObj, matches.concat(i++, n0));
          if (!ret) {
            return false;
          }
        }
        return true;
      }
    }, {
      key: "map",
      value: function map(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var ret = [];
        var regex = mixinRegex(this.regex, 'g');
        var matches,
          n0,
          i = 0;
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          ret.push(cb.apply(thisObj, matches.concat(i++, n0)));
        }
        return ret;
      }
    }, {
      key: "filter",
      value: function filter(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var matches,
          n0,
          i = 0;
        var ret = [],
          regex = mixinRegex(this.regex, 'g');
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          matches = matches.concat(i++, n0);
          if (cb.apply(thisObj, matches)) {
            ret.push(n0[0]);
          }
        }
        return ret;
      }
    }, {
      key: "reduce",
      value: function reduce(str, cb, prev) {
        var thisObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var matches,
          n0,
          i = 0;
        var regex = mixinRegex(this.regex, 'g');
        if (!prev) {
          if ((matches = regex.exec(str)) !== null) {
            n0 = matches.splice(0, 1);
            prev = cb.apply(thisObj, [''].concat(matches.concat(i++, n0)));
          }
        }
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          prev = cb.apply(thisObj, [prev].concat(matches.concat(i++, n0)));
        }
        return prev;
      }
    }, {
      key: "reduceRight",
      value: function reduceRight(str, cb, prevOrig, thisObjOrig) {
        var matches,
          n0,
          i,
          thisObj = thisObjOrig,
          prev = prevOrig;
        var matchesContainer = [],
          regex = mixinRegex(this.regex, 'g');
        thisObj = thisObj || null;
        while ((matches = regex.exec(str)) !== null) {
          matchesContainer.push(matches);
        }
        i = matchesContainer.length;
        if (!i) {
          if (arguments.length < 3) {
            throw new TypeError('reduce of empty matches array with no initial value');
          }
          return prev;
        }
        if (!prev) {
          matches = matchesContainer.splice(-1)[0];
          n0 = matches.splice(0, 1);
          prev = cb.apply(thisObj, [''].concat(matches.concat(i--, n0)));
        }
        matchesContainer.reduceRight(function (container, mtches) {
          n0 = mtches.splice(0, 1);
          prev = cb.apply(thisObj, [prev].concat(mtches.concat(i--, n0)));
          return container;
        }, matchesContainer);
        return prev;
      }
    }, {
      key: "find",
      value: function find(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var matches,
          ret,
          n0,
          i = 0;
        var regex = mixinRegex(this.regex, 'g');
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          ret = cb.apply(thisObj, matches.concat(i++, n0));
          if (ret) {
            return n0[0];
          }
        }
        return false;
      }
    }, {
      key: "findIndex",
      value: function findIndex(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var regex = mixinRegex(this.regex, 'g');
        var matches,
          i = 0;
        while ((matches = regex.exec(str)) !== null) {
          var n0 = matches.splice(0, 1);
          var ret = cb.apply(thisObj, matches.concat(i++, n0));
          if (ret) {
            return i - 1;
          }
        }
        return -1;
      }
    }, {
      key: "findExec",
      value: function findExec(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var regex = mixinRegex(this.regex, 'g');
        var matches,
          i = 0;
        while ((matches = regex.exec(str)) !== null) {
          var n0 = matches.splice(0, 1);
          var ret = cb.apply(thisObj, matches.concat(i++, n0));
          if (ret) {
            return matches;
          }
        }
        return false;
      }
    }, {
      key: "filterExec",
      value: function filterExec(str, cb) {
        var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var matches,
          n0,
          i = 0;
        var ret = [],
          regex = mixinRegex(this.regex, 'g');
        while ((matches = regex.exec(str)) !== null) {
          n0 = matches.splice(0, 1);
          matches.push(i++, n0[0]);
          if (cb.apply(thisObj, matches)) {
            ret.push(matches);
          }
        }
        return ret;
      }
    }]);
  }();
  var _RegExtras = exports.RegExtras;
  exports.RegExtras = function RegExtras() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    // eslint-disable-line no-class-assign -- Ok
    return _construct(_RegExtras, args);
  };
  exports.RegExtras.prototype = _RegExtras.prototype;
  exports.RegExtras.mixinRegex = mixinRegex;

  exports.mixinRegex = mixinRegex;

}));
