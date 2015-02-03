/*global require, module*/
/*jslint vars:true*/
(function () {'use strict';

var RegExtras = require('../lib/index'),
    testCase = require('nodeunit').testCase;


module.exports = testCase({

    // ============================================================================
    'forEach': function (test) {
    // ============================================================================
        test.expect(3);
        
        var keys = [], vals = [], is = [];
        
        RegExtras(/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', function (key, val, i, n0) {
            keys.push(key);
            vals.push(val);
            is.push(i);
        });

        test.deepEqual(['key1', 'key2'], keys);
        test.deepEqual(['val1', 'key2'], vals);
        test.deepEqual([0, 1], is);
        
        test.done();
    },
    // ============================================================================
    'some': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === val;
        });
        test.strictEqual(true, result);
        test.done();
    },
    'every': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === val;
        });
        test.strictEqual(false, result);
        test.done();
    },
    'map': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return [key, val];
        });
        test.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
        test.done();
    },
    'filter': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === val;
        });
        test.deepEqual([['key2', 'key2', 1, 'key2: key2']], result);
        test.done();
    },
    'reduce': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', function (prev, key, val, i, n0) {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key1=val1;key2=key2;', result);
        test.done();
    },
    'reduceRight': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', function (prev, key, val, i, n0) {
            return prev + key + '=' + val + ';';
        });
        test.deepEqual('key2=key2;key1=val1;', result);
        test.done();
    }
});

}());
