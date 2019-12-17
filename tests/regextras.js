/* eslint-disable node/no-unsupported-features/es-syntax */
import {RegExtras} from '../dist/index-es.js';

import write from './write.js';

RegExtras(/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
  write(
    'key is ' + key + ', value is ' + val +
        ', and the iteration count is ' + i
  );
});

if (
  RegExtras(/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
    return key === val;
  })
) {
  write('At least one key matches its value');
}
if (!RegExtras(/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
  return key === val;
})) {
  write('Not all keys match their values');
}

write(
  RegExtras(/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
    return key + '=' + val;
  }).join('')
);

const matchingKeyValues = RegExtras(/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
  return key === val;
});
write(
  'Matching key-value sets (' + matchingKeyValues.length + '): ' +
    matchingKeyValues[0]
);

write(
  RegExtras(/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
    return prev + key + '=' + val;
  })
);

write(
  RegExtras(/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
    return prev + key + '=' + val;
  })
);

write(
  'Key2 match: ' + RegExtras(/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
    return key === 'key2';
  })
);

write(
  'Key2 index:' + RegExtras(/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
    return key === 'key2';
  })
);

let exec = RegExtras(/^(.*?): (.*)$/m).findExec('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
  return key === 'key2';
});
write(
  'findExec index:' + exec.index
);
write(
  'findExec result: ' + exec
);

exec = RegExtras(/^(.*?): (.*)$/m).filterExec('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
  return key === 'key2';
});
write(
  'filterExec index:' + exec[0].index
);
write(
  'filterExec result: ' + exec[0]
);
