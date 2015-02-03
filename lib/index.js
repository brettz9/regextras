// We copy the regular expression so as to be able to always ensure the exec expression is a global one (and thereby prevent loops)

var module;
(function (undef) {'use strict';

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

function RegExtras (regex, flags, newLastIndex) {
    if (!(this instanceof RegExtras)) {
        return new RegExtras(regex, flags, newLastIndex);
    }
    this.regex = _mixinRegex((typeof regex === 'string' ? new RegExp(regex) : _mixinRegex(regex)), flags || '', newLastIndex);
}

RegExtras.prototype.forEach = function (str, cb, thisObj) {
    var matches, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        cb.apply(thisObj, matches.concat(i++, n0));
    }
    return this;
};

RegExtras.prototype.some = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
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

RegExtras.prototype.every = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
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

RegExtras.prototype.map = function (str, cb, thisObj) {
    var matches, n0, i = 0, ret = [], regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret.push(cb.apply(thisObj, matches.concat(i++, n0)));
    }
    return ret;
};

RegExtras.prototype.filter = function (str, cb, thisObj) {
    var matches, n0, i = 0, ret = [], regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        matches = matches.concat(i++, n0);
        if (cb.apply(thisObj, matches)) {
            ret.push(n0[0]);
        }
    }
    return ret;
};

RegExtras.prototype.reduce = function (str, cb, prev, thisObj) {
    var matches, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
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

RegExtras.prototype.reduceRight = function (str, cb, prevOrig, thisObjOrig) {
    var matches, n0, i, matchesContainer = [],
        prev = prevOrig, thisObj = thisObjOrig, regex = _mixinRegex(this.regex, 'g');
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
        prev = cb.apply(thisObj, [''].concat(matches.concat(i--, n0)));
    }
    matchesContainer.reduceRight(function (container, matches) {
        n0 = matches.splice(0, 1);
        prev = cb.apply(thisObj, [prev].concat(matches.concat(i--, n0)));
        return container;
    }, matchesContainer);
    return prev;
};

RegExtras.prototype.find = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret = cb.apply(thisObj, matches.concat(i++, n0));
        if (ret) {
            return n0[0];
        }
    }
    return false;
};

RegExtras.prototype.findIndex = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret = cb.apply(thisObj, matches.concat(i++, n0));
        if (ret) {
            return i - 1;
        }
    }
    return -1;
};

RegExtras.prototype.findExec = function (str, cb, thisObj) {
    var matches, ret, n0, i = 0, regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        ret = cb.apply(thisObj, matches.concat(i++, n0));
        if (ret) {
            return matches;
        }
    }
    return false;
};

RegExtras.prototype.filterExec = function (str, cb, thisObj) {
    var matches, n0, i = 0, ret = [], regex = _mixinRegex(this.regex, 'g');
    thisObj = thisObj || null;
    while ((matches = regex.exec(str)) !== null) {
        n0 = matches.splice(0, 1);
        matches.push(i++, n0[0]);
        if (cb.apply(thisObj, matches)) {
            ret.push(matches);
        }
    }
    return ret;
};

if (module === undef) {
    window.RegExtras = RegExtras;
}
else {
    module.exports = RegExtras;
}


}());