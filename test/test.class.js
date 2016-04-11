/*global require, module*/
/*jslint vars:true*/
(function () {'use strict';

var RegExtras = require('../lib/main'),
    testCase = require('nodeunit').testCase;


module.exports = testCase({

    // ============================================================================
    'forEach': function (test) {
    // ============================================================================
        test.expect(4);

        var keys = [], vals = [], is = [], n0s = [];

        RegExtras(/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', function (key, val, i, n0) {
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
        test.deepEqual(['key2: key2'], result);
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
    },
    // ============================================================================
    'find': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', function (key, val, i, n0) {
            return key === 'key2';
        });
        test.strictEqual('key2: key2', result);
        test.done();
    },
    // ============================================================================
    'findIndex': function (test) {
    // ============================================================================
        test.expect(1);
        var result = RegExtras(/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', function (key, val, i, n0) {
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
        var result = RegExtras(/^(.*?): (.*)$/m).findExec(input, function (key, val, i, n0) {
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
        var result = RegExtras(/^(.*?): (.*)$/m).filterExec(input, function (key, val, i, n0) {
            return key === val;
        });
        var expectedArr = [['key2', 'key2', 1, 'key2: key2']];
        expectedArr[0].index = 11;
        expectedArr[0].input = input;
        test.deepEqual(expectedArr, result);
        test.done();
    },
    'values': function (test) {
        const iter = RegExtras(/a([b-z]*)/).values('abc add axyz')
        const wholes = [];
        const parts = [];
        const expectedWholes = ['abc', 'add', 'axyz'];
        const expectedParts = ['bc', 'dd', 'xyz'];
        let whole, part;
        for (let arr of iter) {
            whole = arr[0];
            part = arr[1];
            wholes.push(whole);
            parts.push(part);
        }
        test.deepEqual(expectedWholes, wholes);
        test.deepEqual(expectedParts, parts);
        test.done();
    },
    'entries': function (test) {
        const iter2 = RegExtras(/a([b-z]*)/).entries('abc add axyz')
        const wholes = [];
        const parts = [];
        const is = [];
        const expectedWholes = ['abc', 'add', 'axyz'];
        const expectedParts = ['bc', 'dd', 'xyz'];
        const expectedIs = [0, 1, 2];
        let i, whole, part;
        for (let arr of iter2) {
            i = arr[0];
            whole = arr[1][0];
            part = arr[1][1];
            is.push(i);
            wholes.push(whole);
            parts.push(part);
        }
        test.deepEqual(expectedIs, is);
        test.deepEqual(expectedWholes, wholes);
        test.deepEqual(expectedParts, parts);
        test.done();
    },
    'keys': function (test) {
        const is = [];
        const iter3 = RegExtras(/a([b-z]*)/).keys('abc add axyz')
        const expectedIs = [0, 1, 2];
        for (let i of iter3) {
            is.push(i);
        }
        test.deepEqual(expectedIs, is);
        test.done();
    }
});

}());
