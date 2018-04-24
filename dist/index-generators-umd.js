(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.RegExtras = factory());
}(this, (function () { 'use strict';

    // We copy the regular expression so as to be able to always ensure the exec expression is a global one (and thereby prevent loops)

    function addPrototypeMethods(RegExtras) {
        RegExtras.prototype.entries = function* (str) {
            let matches,
                i = 0;
            const regex = RegExtras.mixinRegex(this.regex, 'g');
            while ((matches = regex.exec(str)) !== null) {
                yield [i++, matches];
            }
        };

        RegExtras.prototype.values = function* (str) {
            let matches;
            const regex = RegExtras.mixinRegex(this.regex, 'g');
            while ((matches = regex.exec(str)) !== null) {
                yield matches;
            }
        };

        RegExtras.prototype.keys = function* (str) {
            let i = 0;
            const regex = RegExtras.mixinRegex(this.regex, 'g');
            while (regex.exec(str) !== null) {
                yield i++;
            }
        };
    }

    return addPrototypeMethods;

})));
