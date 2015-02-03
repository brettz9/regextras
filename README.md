# regextras

Array extras for regular expressions.

Also provides optional `String` and `RegExp` prototype extensions.

## API

### Constructor

`new RegExtras(regex, flags, newLastIndex)`

Example:

```js
var piglatinArray = RegExtras(/\w*w?ay/).reduce('ouyay areway illysay', function (arr, word) {
    if ((/way$/).test(word)) {arr.push(word.replace(/way$/, ''));}
    else {arr.push(word.slice(-3, -2) + word.slice(0, -3));}
    return arr;
}, []);
```

All arguments but the first are optional, and the first argument can be expressed as a string.

The `new` keywords is not required.

### Methods

These methods (and their callbacks) behave like the [array extra](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
to which they correspond with exceptions detailed below.

- ***forEach(str, callback, thisObject)*** - Unlike the other extras, this method returns the RegExtras object (to enable chaining).
- ***some(str, callback, thisObject)***
- ***every(str, callback, thisObject)***
- ***map(str, callback, thisObject)***
- ***filter(str, callback, thisObject)***
- ***reduce(str, cb, prev, thisObj)*** - Unlike the array extras, allows a fourth argument to set an alternative value for `this` within the callback.
- ***reduceRight(str, cb, prev, thisObj)*** - Unlike the array extras, allows a fourth argument to set an alternative value for `this` within the callback.
- ***find(str, cb, thisObj)***
- ***findIndex(str, cb, thisObj)***

Also adds the following methods:
- ***findExec(str, cb, thisObj)*** - Operates like `find()` except that it returns the `exec` result array (with `index` and `input` as well as numeric properties as returned by [RegExp.prototype.exec](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)).

### Callbacks

All callbacks will follow the signature:

`cb(key, val, i, n0);`

...except for the `reduce` and `reduceRight` callbacks which follow:

`cb(prev, key, val, i, n0);`

# Todos

- Document and add nodeunit tests for prototype versions usage
