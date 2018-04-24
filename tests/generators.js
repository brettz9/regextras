import RegExtras from '../dist/index-es.js';

import indexGenerators from '../dist/index-generators-es.js';
indexGenerators(RegExtras);

const iter = RegExtras(/a([b-z]*)/).values('abc add axyz');
for (const [whole, part] of iter) {
    console.log(whole);
    console.log(part);
}

const iter2 = RegExtras(/a([b-z]*)/).entries('abc add axyz');
for (const [i, [whole, part]] of iter2) {
    console.log(i);
    console.log(whole);
    console.log(part);
}

const iter3 = RegExtras(/a([b-z]*)/).keys('abc add axyz');
for (const i of iter3) {
    console.log(i);
}
