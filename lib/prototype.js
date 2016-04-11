// We copy the regular expression so as to be able to always ensure the exec expression is a global one (and thereby prevent loops)

(function () {'use strict';

function _mixinRegex (regex, newFlags, newLastIndex) {
    newLastIndex = newLastIndex === undefined ? regex.lastIndex : newLastIndex;
    newFlags = newFlags || '';
    regex = new RegExp(
        regex.source,
        (newFlags.indexOf('g') > -1 ? 'g' : regex.global ? 'g' : '') +
            (newFlags.indexOf('i') > -1 ? 'i' : regex.ignoreCase ? 'i' : '') +
            (newFlags.indexOf('m') > -1 ? 'm' : regex.multiline ? 'm' : '') +
            (newFlags.indexOf('y') > -1 ? 'y' : regex.sticky ? 'y' : '') // Non-standard but harmless if already being used
    );
    regex.lastIndex = newLastIndex;
    return regex;
}

RegExp.prototype.forEach = function (str, cb, thisObj) {
    var matches, n0, i = 0, regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        cb.apply(thisObj, matches.concat(i++, n0));
    }
    return this;
};

RegExp.prototype.some = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret = cb.apply(thisObj, matches.concat(i++, n0));
        if (ret) {
            return true;
        }
    }
    return false;
};

RegExp.prototype.every = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret = cb.apply(thisObj, matches.concat(i++, n0));
        if (!ret) {
            return false;
        }
    }
    return true;
};

RegExp.prototype.map = function (str, cb, thisObj) {
    var matches, n0, i = 0, ret = [], regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret.push(cb.apply(thisObj, matches.concat(i++, n0)));
    }
    return ret;
};

RegExp.prototype.filter = function (str, cb, thisObj) {
    var matches, n0, i = 0, ret = [], regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        matches = matches.concat(i++, n0);
        if (cb.apply(thisObj, matches)) {
            ret.push(matches[0]);
        }
    }
    return ret;
};

RegExp.prototype.reduce = function (str, cb, prev, thisObj) {
    var matches, n0, i = 0, regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    if (!prev) {
        if ((matches = regex.exec(str)) !== null) {
            n0 = matches.splice(0, 1);
            prev = cb.apply(thisObj, [''].concat(matches.concat(n0, i++)));
        }
    }
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        prev = cb.apply(thisObj, [prev].concat(matches.concat(n0, i++)));
    }
    return prev;
};

RegExp.prototype.reduceRight = function (str, cb, prevOrig, thisObjOrig) {
    var matches, n0, i, matchesContainer = [],
        prev = prevOrig, thisObj = thisObjOrig, regex = _mixinRegex(this, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        matchesContainer.push(matches);
    }
    i = matchesContainer.length;
    if (!i) {
        if (arguments.length < 3) {
            throw 'reduce of empty matches array with no initial value';
        }
        return prev;
    }
    if (!prev) {
        matches = matchesContainer.splice(-1)[0];
        n0 = matches.splice(0, 1);
        prev = cb.apply(thisObj, [''].concat(matches.concat(n0, i--)));
    }
    matchesContainer.reduceRight(function (container, matches) {
        n0 = matches.splice(0, 1);
        prev = cb.apply(thisObj, [prev].concat(matches.concat(n0, i--)));
        return container;
    }, matchesContainer);
    return prev;
};


}());
