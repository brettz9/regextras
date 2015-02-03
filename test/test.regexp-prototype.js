/*global require, module*/
/*jslint vars:true*/
(function () {'use strict';

var testCase = require('nodeunit').testCase;
require('../lib/regexp-prototype');

module.exports = testCase({

    // ============================================================================
    'forEach': function (test) {
    // ============================================================================
        test.expect(4);
        
        var keys = [], vals = [], is = [], n0s = [];
        
        (/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', function (key, val, i, n0) {
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
        var result = (/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === val;
        });
        test.strictEqual(true, result);
        test.done();
    },
    'every': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === val;
        });
        test.strictEqual(false, result);
        test.done();
    },
    'map': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return [key, val];
        });
        test.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
        test.done();
    },
    'filter': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === val;
        });
        test.deepEqual(['key2: key2'], result);
        test.done();
    },
    'reduce': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', function (prev, key, val, i, n0) {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key1=val1;key2=key2;', result);
        test.done();
    },
    'reduceRight': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', function (prev, key, val, i, n0) {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key2=key2;key1=val1;', result);
        test.done();
    },
    // ============================================================================
    'find': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === 'key2';
        });
        test.strictEqual('key2: key2', result);
        test.done();
    },
    // ============================================================================
    'findIndex': function (test) {
    // ============================================================================
        test.expect(1);
        var result = (/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', function (key, val, i, n0) {
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
        var result = (/^(.*?): (.*)$/m).findExec(input, function (key, val, i, n0) {
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
        var result = (/^(.*?): (.*)$/m).filterExec(input, function (key, val, i, n0) {
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
