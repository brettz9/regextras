/* eslint-disable no-use-extend-native/no-use-extend-native -- API */
import '../src/string-prototype.js';

describe('RegExtras - String prototype', function () {
  it('forEach', () => {
    const keys = [], vals = [], is = [], n0s = [];

    'key1: val1\nkey2: key2'.forEach(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      keys.push(key);
      vals.push(val);
      is.push(i);
      n0s.push(n0);
    });

    assert.deepEqual(keys, ['key1', 'key2']);
    assert.deepEqual(vals, ['val1', 'key2']);
    assert.deepEqual(is, [0, 1]);
    assert.deepEqual(n0s, ['key1: val1', 'key2: key2']);
  });
  it('some', () => {
    const result = 'key1: val1\nkey2: key2'.some(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === val;
    });
    assert.strictEqual(result, true);
  });
  it('every', () => {
    const result = 'key1: val1\nkey2: key2'.every(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === val;
    });
    assert.strictEqual(result, false);
  });
  it('map', () => {
    const result = 'key1: val1\nkey2: key2'.map(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return [key, val];
    });
    assert.deepEqual(result, [['key1', 'val1'], ['key2', 'key2']]);
  });
  it('filter', () => {
    const result = 'key1: val1\nkey2: key2'.filter(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === val;
    });
    assert.deepEqual(result, ['key2: key2']);
  });
  it('reduce', () => {
    const result = 'key1: val1\nkey2: key2'.reduce(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
      return prev + key + '=' + val + ';';
    });
    assert.deepEqual(result, 'key1=val1;key2=key2;');
  });
  it('reduceRight', () => {
    const result = 'key1: val1\nkey2: key2'.reduceRight(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
      return prev + key + '=' + val + ';';
    });
    assert.deepEqual(result, 'key2=key2;key1=val1;');
  });
  it('find', () => {
    const result = 'key1: val1\nkey2: key2'.find(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === 'key2';
    });
    assert.strictEqual(result, 'key2: key2');
  });
  it('findIndex', () => {
    const result = 'key1: val1\nkey2: key2'.findIndex(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === 'key2';
    });
    assert.strictEqual(result, 1);
  });
  it('findExec', () => {
    const input = 'key1: val1\nkey2: key2';
    const result = input.findExec(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === 'key2';
    });
    const expected = ['key2', 'key2'];
    expected.index = 11;
    expected.input = input;

    assert.deepEqual(result, expected);
  });
  it('filterExec', () => {
    const input = 'key1: val1\nkey2: key2';
    const result = 'key1: val1\nkey2: key2'.filterExec(/^(.*?): (.*)$/m, (key, val, i, n0) => {
      return key === val;
    });
    const expectedArr = [['key2', 'key2', 1, 'key2: key2']];
    expectedArr[0].index = 11;
    expectedArr[0].input = input;
    assert.deepEqual(result, expectedArr);
  });
});
