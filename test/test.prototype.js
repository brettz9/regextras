/* eslint-disable no-use-extend-native/no-use-extend-native -- API */
import '../src/prototype.js';

describe('RegExtras - Prototype', function () {
  it('forEach', () => {
    const keys = [], vals = [], is = [], n0s = [];

    (/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
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
    const result = (/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === val;
    });
    assert.strictEqual(result, true);
  });
  it('every', () => {
    const result = (/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === val;
    });
    assert.strictEqual(result, false);
  });
  it('map', () => {
    const result = (/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return [key, val];
    });
    assert.deepEqual(result, [['key1', 'val1'], ['key2', 'key2']]);
  });
  it('filter', () => {
    const result = (/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === val;
    });
    assert.deepEqual(result, ['key2: key2']);
  });
  it('reduce', () => {
    const result = (/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
      return prev + key + '=' + val + ';';
    });
    assert.deepEqual(result, 'key1=val1;key2=key2;');
  });
  it('reduceRight', () => {
    const result = (/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
      return prev + key + '=' + val + ';';
    });
    assert.deepEqual(result, 'key2=key2;key1=val1;');
  });
  it('find', () => {
    const result = (/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === 'key2';
    });
    assert.strictEqual(result, 'key2: key2');
  });
  it('findIndex', () => {
    const result = (/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (key, val, i, n0) => {
      return key === 'key2';
    });
    assert.strictEqual(result, 1);
  });
});
