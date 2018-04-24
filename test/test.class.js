/* global require, module */

const RegExtras = require('../dist/index-umd.js'),
    {testCase} = require('nodeunit');

module.exports = testCase({
    forEach (test) {
        test.expect(4);

        const keys = [], vals = [], is = [], n0s = [];

        RegExtras(/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
            keys.push(key);
            vals.push(val);
            is.push(i);
            n0s.push(n0);
        });

        test.deepEqual(['key1', 'key2'], keys);
        test.deepEqual(['val1', 'key2'], vals);
        test.deepEqual([0, 1], is);
        test.deepEqual(['key1: val1', 'key2: key2'], n0s);

        test.done();
    },
    some (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        test.strictEqual(true, result);
        test.done();
    },
    every (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        test.strictEqual(false, result);
        test.done();
    },
    map (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return [key, val];
        });
        test.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
        test.done();
    },
    filter (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        test.deepEqual(['key2: key2'], result);
        test.done();
    },
    reduce (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key1=val1;key2=key2;', result);
        test.done();
    },
    reduceRight (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key2=key2;key1=val1;', result);
        test.done();
    },
    find (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === 'key2';
        });
        test.strictEqual('key2: key2', result);
        test.done();
    },
    findIndex (test) {
        test.expect(1);
        const result = RegExtras(/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === 'key2';
        });
        test.strictEqual(1, result);
        test.done();
    },
    findExec (test) {
        test.expect(1);
        const input = 'key1: val1\nkey2: key2';
        const result = RegExtras(/^(.*?): (.*)$/m).findExec(input, (key, val, i, n0) => {
            return key === 'key2';
        });
        const expected = ['key2', 'key2'];
        expected.index = 11;
        expected.input = input;

        test.deepEqual(expected, result);
        test.done();
    },
    filterExec (test) {
        test.expect(1);
        const input = 'key1: val1\nkey2: key2';
        const result = RegExtras(/^(.*?): (.*)$/m).filterExec(input, (key, val, i, n0) => {
            return key === val;
        });
        const expectedArr = [['key2', 'key2', 1, 'key2: key2']];
        expectedArr[0].index = 11;
        expectedArr[0].input = input;
        test.deepEqual(expectedArr, result);
        test.done();
    },
    values (test) {
        const iter = RegExtras(/a([b-z]*)/).values('abc add axyz');
        const wholes = [];
        const parts = [];
        const expectedWholes = ['abc', 'add', 'axyz'];
        const expectedParts = ['bc', 'dd', 'xyz'];
        let whole, part;
        for (const arr of iter) {
            [whole, part] = arr;
            wholes.push(whole);
            parts.push(part);
        }
        test.deepEqual(expectedWholes, wholes);
        test.deepEqual(expectedParts, parts);
        test.done();
    },
    entries (test) {
        const iter2 = RegExtras(/a([b-z]*)/).entries('abc add axyz');
        const wholes = [];
        const parts = [];
        const is = [];
        const expectedWholes = ['abc', 'add', 'axyz'];
        const expectedParts = ['bc', 'dd', 'xyz'];
        const expectedIs = [0, 1, 2];
        let i, whole, part;
        for (const arr of iter2) {
            i = arr[0];
            [whole, part] = arr[1];
            is.push(i);
            wholes.push(whole);
            parts.push(part);
        }
        test.deepEqual(expectedIs, is);
        test.deepEqual(expectedWholes, wholes);
        test.deepEqual(expectedParts, parts);
        test.done();
    },
    keys (test) {
        const is = [];
        const iter3 = RegExtras(/a([b-z]*)/).keys('abc add axyz');
        const expectedIs = [0, 1, 2];
        for (const i of iter3) {
            is.push(i);
        }
        test.deepEqual(expectedIs, is);
        test.done();
    }
});
