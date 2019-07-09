/* eslint-disable no-use-extend-native/no-use-extend-native,
    node/no-unsupported-features/es-syntax */

import '../dist/regexp-prototype-es.js';

import write from './write.js';

(/^(.*?): (.*)$/m).forEach('key1: val1\nkey2: key2', (key, val, i, n0) => {
    write(
        'key is ' + key + ', value is ' + val +
        ', and the iteration count is ' + i
    );
});

if (
    (/^(.*?): (.*)$/m).some('key1: val1\nkey2: key2', (key, val, i, n0) => {
        return key === val;
    })
) {
    write('At least one key matches its value');
}
if (!(/^(.*?): (.*)$/m).every('key1: val1\nkey2: key2', (key, val, i, n0) => {
    return key === val;
})) {
    write('Not all keys match their values');
}

write(
    (/^(.*?): (.*)$/m).map('key1: val1\nkey2: key2', (key, val, i, n0) => {
        return key + '=' + val;
    }).join('')
);

const matchingKeyValues = (/^(.*?): (.*)$/m).filter('key1: val1\nkey2: key2', (key, val, i, n0) => {
    return key === val;
});
write(
    'Matching key-value sets (' + matchingKeyValues.length + '): ' +
    matchingKeyValues[0]
);

write(
    (/^(.*?): (.*)$/m).reduce('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
        return prev + key + '=' + val;
    })
);

write(
    (/^(.*?): (.*)$/m).reduceRight('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
        return prev + key + '=' + val;
    })
);

write(
    'Key2 match: ' + (/^(.*?): (.*)$/m).find('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
        return key === 'key2';
    })
);

write(
    'Key2 index:' + (/^(.*?): (.*)$/m).findIndex('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
        return key === 'key2';
    })
);

let exec = (/^(.*?): (.*)$/m).findExec('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
    return key === 'key2';
});
write(
    'findExec index:' + exec.index
);
write(
    'findExec result: ' + exec
);

exec = (/^(.*?): (.*)$/m).filterExec('key1: val1\nkey2: key2', (prev, key, val, i, n0) => {
    return key === 'key2';
});
write(
    'filterExec index:' + exec[0].index
);
write(
    'filterExec result: ' + exec[0]
);
