/* eslint-disable no-extend-native */
// We copy the regular expression so as to be able to always ensure the exec
//   expression is a global one (and thereby prevent recursion)
function mixinRegex(regex, newFlags) {
  var newLastIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : regex.lastIndex;
  newFlags = newFlags || '';
  regex = new RegExp(regex.source, (newFlags.includes('g') ? 'g' : regex.global ? 'g' : '') + (newFlags.includes('i') ? 'i' : regex.ignoreCase ? 'i' : '') + (newFlags.includes('m') ? 'm' : regex.multiline ? 'm' : '') + (newFlags.includes('u') ? 'u' : regex.sticky ? 'u' : '') + (newFlags.includes('y') ? 'y' : regex.sticky ? 'y' : ''));
  regex.lastIndex = newLastIndex;
  return regex;
}

RegExp.prototype.forEach = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    cb.apply(thisObj, matches.concat(i++, n0));
  }

  return this;
};

RegExp.prototype.some = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      ret,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    ret = cb.apply(thisObj, matches.concat(i++, n0));

    if (ret) {
      return true;
    }
  }

  return false;
};

RegExp.prototype.every = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      ret,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    ret = cb.apply(thisObj, matches.concat(i++, n0));

    if (!ret) {
      return false;
    }
  }

  return true;
};

RegExp.prototype.map = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      n0,
      i = 0;
  var ret = [],
      regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    ret.push(cb.apply(thisObj, matches.concat(i++, n0)));
  }

  return ret;
};

RegExp.prototype.filter = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      n0,
      i = 0;
  var ret = [],
      regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    matches = matches.concat(i++, n0);

    if (cb.apply(thisObj, matches)) {
      ret.push(n0[0]);
    }
  }

  return ret;
};

RegExp.prototype.reduce = function (str, cb, prev) {
  var thisObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var matches,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

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
};

RegExp.prototype.reduceRight = function (str, cb, prevOrig, thisObjOrig) {
  var matches,
      n0,
      i,
      prev = prevOrig,
      thisObj = thisObjOrig;
  var matchesContainer = [],
      regex = mixinRegex(this, 'g');
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

  matchesContainer.reduceRight(function (container, matches) {
    n0 = matches.splice(0, 1);
    prev = cb.apply(thisObj, [prev].concat(matches.concat(i--, n0)));
    return container;
  }, matchesContainer);
  return prev;
};

RegExp.prototype.find = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      ret,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    ret = cb.apply(thisObj, matches.concat(i++, n0));

    if (ret) {
      return n0[0];
    }
  }

  return false;
};

RegExp.prototype.findIndex = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      ret,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    ret = cb.apply(thisObj, matches.concat(i++, n0));

    if (ret) {
      return i - 1;
    }
  }

  return -1;
};

RegExp.prototype.findExec = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      ret,
      n0,
      i = 0;
  var regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    ret = cb.apply(thisObj, matches.concat(i++, n0));

    if (ret) {
      return matches;
    }
  }

  return false;
};

RegExp.prototype.filterExec = function (str, cb) {
  var thisObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var matches,
      n0,
      i = 0;
  var ret = [],
      regex = mixinRegex(this, 'g');

  while ((matches = regex.exec(str)) !== null) {
    n0 = matches.splice(0, 1);
    matches.push(i++, n0[0]);

    if (cb.apply(thisObj, matches)) {
      ret.push(matches);
    }
  }

  return ret;
};
