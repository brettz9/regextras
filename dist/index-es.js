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
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = false,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function (t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = true, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), true), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine(u), _regeneratorDefine(u, o, "Generator"), _regeneratorDefine(u, n, function () {
    return this;
  }), _regeneratorDefine(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function () {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine = function (e, r, n, t) {
    if (r) i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n;else {
      function o(r, n) {
        _regeneratorDefine(e, r, function (e) {
          return this._invoke(r, n, e);
        });
      }
      o("next", 0), o("throw", 1), o("return", 2);
    }
  }, _regeneratorDefine(e, r, n, t);
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

var RegExtras = /*#__PURE__*/function () {
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
var _RegExtras = RegExtras;
RegExtras = function RegExtras() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  // eslint-disable-line no-class-assign -- Ok
  return _construct(_RegExtras, args);
};
RegExtras.prototype = _RegExtras.prototype;
RegExtras.mixinRegex = mixinRegex;

// We copy the regular expression so as to be able to always
// ensure the exec expression is a global one (and thereby prevent recursion)

/**
 *
 * @param {RegExtras} RegExtras
 * @returns {void}
 */
function addPrototypeMethods(RegExtras) {
  RegExtras.prototype.entries = /*#__PURE__*/_regenerator().m(function _callee(str) {
    var matches, i, regex;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          i = 0;
          regex = RegExtras.mixinRegex(this.regex, 'g');
        case 1:
          if (!((matches = regex.exec(str)) !== null)) {
            _context.n = 3;
            break;
          }
          _context.n = 2;
          return [i++, matches];
        case 2:
          _context.n = 1;
          break;
        case 3:
          return _context.a(2);
      }
    }, _callee, this);
  });
  RegExtras.prototype.values = /*#__PURE__*/_regenerator().m(function _callee2(str) {
    var matches, regex;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          regex = RegExtras.mixinRegex(this.regex, 'g');
        case 1:
          if (!((matches = regex.exec(str)) !== null)) {
            _context2.n = 3;
            break;
          }
          _context2.n = 2;
          return matches;
        case 2:
          _context2.n = 1;
          break;
        case 3:
          return _context2.a(2);
      }
    }, _callee2, this);
  });
  RegExtras.prototype.keys = /*#__PURE__*/_regenerator().m(function _callee3(str) {
    var i, regex;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          i = 0;
          regex = RegExtras.mixinRegex(this.regex, 'g');
        case 1:
          if (!(regex.exec(str) !== null)) {
            _context3.n = 3;
            break;
          }
          _context3.n = 2;
          return i++;
        case 2:
          _context3.n = 1;
          break;
        case 3:
          return _context3.a(2);
      }
    }, _callee3, this);
  });
}

addPrototypeMethods(RegExtras);

export { RegExtras, mixinRegex };
