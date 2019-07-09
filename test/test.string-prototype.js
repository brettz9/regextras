/* globals assert */
/* eslint-disable no-use-extend-native/no-use-extend-native */
'use strict';
require('../dist/string-prototype-umd.js');

describe('RegExtras - String prototype', function () {
    it('forEach', () => {
        const keys = [], vals = [], is = [], n0s = [];

        'key1: val1\nkey2: key2'.forEach(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            keys.push(key);
            vals.push(val);
            is.push(i);
            n0s.push(n0);
        });

        assert.deepEqual(['key1', 'key2'], keys);
        assert.deepEqual(['val1', 'key2'], vals);
        assert.deepEqual([0, 1], is);
        assert.deepEqual(['key1: val1', 'key2: key2'], n0s);
    });
    it('some', () => {
        const result = 'key1: val1\nkey2: key2'.some(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === val;
        });
        assert.strictEqual(true, result);
    });
    it('every', () => {
        const result = 'key1: val1\nkey2: key2'.every(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === val;
        });
        assert.strictEqual(false, result);
    });
    it('map', () => {
        const result = 'key1: val1\nkey2: key2'.map(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return [key, val];
        });
        assert.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
    });
    it('filter', () => {
        const result = 'key1: val1\nkey2: key2'.filter(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === val;
        });
        assert.deepEqual(['key2: key2'], result);
    });
    it('reduce', () => {
        const result = 'key1: val1\nkey2: key2'.reduce(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        assert.deepEqual('key1=val1;key2=key2;', result);
    });
    it('reduceRight', () => {
        const result = 'key1: val1\nkey2: key2'.reduceRight(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        assert.deepEqual('key2=key2;key1=val1;', result);
    });
    it('find', () => {
        const result = 'key1: val1\nkey2: key2'.find(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === 'key2';
        });
        assert.strictEqual('key2: key2', result);
    });
    it('findIndex', () => {
        const result = 'key1: val1\nkey2: key2'.findIndex(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === 'key2';
        });
        assert.strictEqual(1, result);
    });
    it('findExec', () => {
        const input = 'key1: val1\nkey2: key2';
        const result = input.findExec(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === 'key2';
        });
        const expected = ['key2', 'key2'];
        expected.index = 11;
        expected.input = input;

        assert.deepEqual(expected, result);
    });
    it('filterExec', () => {
        const input = 'key1: val1\nkey2: key2';
        const result = 'key1: val1\nkey2: key2'.filterExec(/^(.*?): (.*)$/m, (key, val, i, n0) => {
            return key === val;
        });
        const expectedArr = [['key2', 'key2', 1, 'key2: key2']];
        expectedArr[0].index = 11;
        expectedArr[0].input = input;
        assert.deepEqual(expectedArr, result);
    });
});
