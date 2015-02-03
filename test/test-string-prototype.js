/*global require, module*/
/*jslint vars:true*/
(function () {'use strict';

var testCase = require('nodeunit').testCase;
require('../lib/string-prototype');

module.exports = testCase({

    // ============================================================================
    'forEach': function (test) {
    // ============================================================================
        test.expect(4);
        
        var keys = [], vals = [], is = [], n0s = [];
        
        'key1: val1\nkey2: key2'.forEach(/^(.*?): (.*)$/m, function (key, val, i, n0) {
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
    // ============================================================================
    'some': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.some(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === val;
        });
        test.strictEqual(true, result);
        test.done();
    },
    'every': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.every(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === val;
        });
        test.strictEqual(false, result);
        test.done();
    },
    'map': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.map(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return [key, val];
        });
        test.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
        test.done();
    },
    'filter': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.filter(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === val;
        });
        test.deepEqual(['key2: key2'], result);
        test.done();
    },
    'reduce': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.reduce(/^(.*?): (.*)$/m, function (prev, key, val, i, n0) {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key1=val1;key2=key2;', result);
        test.done();
    },
    'reduceRight': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.reduceRight(/^(.*?): (.*)$/m, function (prev, key, val, i, n0) {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key2=key2;key1=val1;', result);
        test.done();
    },
    // ============================================================================
    'find': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.find(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === 'key2';
        });
        test.strictEqual('key2: key2', result);
        test.done();
    },
    // ============================================================================
    'findIndex': function (test) {
    // ============================================================================
        test.expect(1);
        var result = 'key1: val1\nkey2: key2'.findIndex(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === 'key2';
        });
        test.strictEqual(1, result);
        test.done();
    },
    // ============================================================================
    'findExec': function (test) {
    // ============================================================================
        test.expect(1);
        var input = 'key1: val1\nkey2: key2';
        var result = input.findExec(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === 'key2';
        });
        var expected = ['key2', 'key2'];
        expected.index = 11;
        expected.input = input;

        test.deepEqual(expected, result);
        test.done();
    },
    'filterExec': function (test) {
    // ============================================================================
        test.expect(1);
        var input = 'key1: val1\nkey2: key2';
        var result = 'key1: val1\nkey2: key2'.filterExec(/^(.*?): (.*)$/m, function (key, val, i, n0) {
            return key === val;
        });
        var expectedArr = [['key2', 'key2', 1, 'key2: key2']];
        expectedArr[0].index = 11;
        expectedArr[0].input = input;
        test.deepEqual(expectedArr, result);
        test.done();
    }
});

}());
