/* globals require, module */

const {testCase} = require('nodeunit');
require('../dist/regexp-prototype-umd.js');

module.exports = testCase({
    forEach (test) {
        test.expect(4);

        const keys = [], vals = [], is = [], n0s = [];

        (/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
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
        const result = (/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        test.strictEqual(true, result);
        test.done();
    },
    every (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        test.strictEqual(false, result);
        test.done();
    },
    map (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return [key, val];
        });
        test.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
        test.done();
    },
    filter (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        test.deepEqual(['key2: key2'], result);
        test.done();
    },
    reduce (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key1=val1;key2=key2;', result);
        test.done();
    },
    reduceRight (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key2=key2;key1=val1;', result);
        test.done();
    },
    find (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === 'key2';
        });
        test.strictEqual('key2: key2', result);
        test.done();
    },
    findIndex (test) {
        test.expect(1);
        const result = (/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === 'key2';
        });
        test.strictEqual(1, result);
        test.done();
    },
    findExec (test) {
        test.expect(1);
        const input = 'key1: val1\nkey2: key2';
        const result = (/^(.*?): (.*)$/m).findExec(input, (key, val, i, n0) => {
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
        const result = (/^(.*?): (.*)$/m).filterExec(input, (key, val, i, n0) => {
            return key === val;
        });
        const expectedArr = [['key2', 'key2', 1, 'key2: key2']];
        expectedArr[0].index = 11;
        expectedArr[0].input = input;
        test.deepEqual(expectedArr, result);
        test.done();
    }
});
