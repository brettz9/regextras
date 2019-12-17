/* globals assert */
'use strict';
const {RegExtras} = require('../dist/index-umd.js');

describe('RegExtras - Class', function () {
  it('forEach', () => {
    const keys = [], vals = [], is = [], n0s = [];

    RegExtras(/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
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
    const result = RegExtras(/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === val;
    });
    assert.strictEqual(true, result);
  });
  it('every', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === val;
    });
    assert.strictEqual(false, result);
  });
  it('map', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return [key, val];
    });
    assert.deepEqual([['key1', 'val1'], ['key2', 'key2']], result);
  });
  it('filter', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === val;
    });
    assert.deepEqual(['key2: key2'], result);
  });
  it('reduce', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
      return prev + key + '=' + val + ';';
    });
    assert.deepEqual('key1=val1;key2=key2;', result);
  });
  it('reduceRight', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
      return prev + key + '=' + val + ';';
    });
    assert.deepEqual('key2=key2;key1=val1;', result);
  });
  it('find', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === 'key2';
    });
    assert.strictEqual('key2: key2', result);
  });
  it('findIndex', () => {
    const result = RegExtras(/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === 'key2';
    });
    assert.strictEqual(1, result);
  });
  it('findExec', () => {
    const input = 'key1: val1\nkey2: key2';
    const result = RegExtras(/^(.*?): (.*)$/m).findExec(input, (key, val, i, n0) => {
      return key === 'key2';
    });
    const expected = ['key2', 'key2'];
    expected.index = 11;
    expected.input = input;

    assert.deepEqual(expected, result);
  });
  it('filterExec', () => {
    const input = 'key1: val1\nkey2: key2';
    const result = RegExtras(/^(.*?): (.*)$/m).filterExec(input, (key, val, i, n0) => {
      return key === val;
    });
    const expectedArr = [['key2', 'key2', 1, 'key2: key2']];
    expectedArr[0].index = 11;
    expectedArr[0].input = input;
    assert.deepEqual(expectedArr, result);
  });
  it('values', () => {
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
    assert.deepEqual(expectedWholes, wholes);
    assert.deepEqual(expectedParts, parts);
  });
  it('entries', () => {
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
    assert.deepEqual(expectedIs, is);
    assert.deepEqual(expectedWholes, wholes);
    assert.deepEqual(expectedParts, parts);
  });
  it('keys', () => {
    const is = [];
    const iter3 = RegExtras(/a([b-z]*)/).keys('abc add axyz');
    const expectedIs = [0, 1, 2];
    for (const i of iter3) {
      is.push(i);
    }
    assert.deepEqual(expectedIs, is);
  });
});
