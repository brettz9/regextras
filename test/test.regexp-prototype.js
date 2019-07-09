/* globals assert */
/* eslint-disable no-use-extend-native/no-use-extend-native */
'use strict';
require('../dist/regexp-prototype-umd.js');

describe('RegExtras - RegExp Prototype', function () {
    it('forEach', () => {
        const keys = [], vals = [], is = [], n0s = [];

        (/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
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
        const result = (/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        assert.strictEqual(true, result);
    });
    it('every', () => {
        const result = (/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        assert.strictEqual(false, result);
    });
    it('map', () => {
        const result = (/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return [key, val];
        });
        assert.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
    });
    it('filter', () => {
        const result = (/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === val;
        });
        assert.deepEqual(['key2: key2'], result);
    });
    it('reduce', () => {
        const result = (/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        assert.deepEqual('key1=val1;key2=key2;', result);
    });
    it('reduceRight', () => {
        const result = (/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
            return prev + key + '=' + val + ';';
        });
        assert.deepEqual('key2=key2;key1=val1;', result);
    });
    it('find', () => {
        const result = (/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === 'key2';
        });
        assert.strictEqual('key2: key2', result);
    });
    it('findIndex', () => {
        const result = (/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (key, val, i, n0) => {
            return key === 'key2';
        });
        assert.strictEqual(1, result);
    });
    it('findExec', () => {
        const input = 'key1: val1\nkey2: key2';
        const result = (/^(.*?): (.*)$/m).findExec(input, (key, val, i, n0) => {
            return key === 'key2';
        });
        const expected = ['key2', 'key2'];
        expected.index = 11;
        expected.input = input;

        assert.deepEqual(expected, result);
    });
    it('filterExec', () => {
        const input = 'key1: val1\nkey2: key2';
        const result = (/^(.*?): (.*)$/m).filterExec(input, (key, val, i, n0) => {
            return key === val;
        });
        const expectedArr = [['key2', 'key2', 1, 'key2: key2']];
        expectedArr[0].index = 11;
        expectedArr[0].input = input;
        assert.deepEqual(expectedArr, result);
    });
});
