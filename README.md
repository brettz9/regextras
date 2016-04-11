# regextras

Array extras for regular expressions.

Also provides optional `String` and `RegExp` prototype extensions.

## Installation

Node:

```js
var RegExtras = require('regextras');
```

Browser:

```html
<script src="regextras/lib/index.js"></script>
```

The prototype versions must be required or included separately.

## API

### Constructor

`new RegExtras(regex, flags, newLastIndex)`

Example:

```js
var piglatinArray = RegExtras(/\w*w?ay/).reduce('ouyay areway illysay', function (arr, i, word) {
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

All callbacks follow the signature:

`cb(n1, n2..., i, n0);`

...except for the `reduce` and `reduceRight` callbacks which follow:

`cb(prev, n1, n2..., i, n0);`

### Prototype versions

`String` and `RegExp` versions of the above methods are also available.

The `RegExp` prototype version acts in the same way as `RegExtra` just
without the need for a separate constructor call.

The `String` prototype version differs in that instead of the first argument
being a string, it is the regular expression.

# Todos

- Could add [Array accessor methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Accessor_methods) like `slice()`, with an additional supplied regular expression to gather the `exec` results into an array.
