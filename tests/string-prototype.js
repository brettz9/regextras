/* eslint-disable no-use-extend-native/no-use-extend-native,
    node/no-unsupported-features/es-syntax */
import '../dist/string-prototype-es.js';

import write from './write.js';

'key1: val1\nkey2: key2'.forEach(/^(.*?): (.*)$/m, (key, val, i, n0) => {
    write(
        'key is ' + key + ', value is ' + val +
        ', and the iteration count is ' + i
    );
});

if (
    'key1: val1\nkey2: key2'.some(/^(.*?): (.*)$/m, (key, val, i, n0) => {
        return key === val;
    })
) {
    write('At least one key matches its value');
}
if (!'key1: val1\nkey2: key2'.every(/^(.*?): (.*)$/m, (key, val, i, n0) => {
    return key === val;
})) {
    write('Not all keys match their values');
}

write(
    'key1: val1\nkey2: key2'.map(/^(.*?): (.*)$/m, (key, val, i, n0) => {
        return key + '=' + val;
    }).join('')
);

const matchingKeyValues = 'key1: val1\nkey2: key2'.filter(/^(.*?): (.*)$/m, (key, val, i, n0) => {
    return key === val;
});
write(
    'Matching key-value sets (' + matchingKeyValues.length + '): ' +
    matchingKeyValues[0]
);

write(
    'key1: val1\nkey2: key2'.reduce(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
        return prev + key + '=' + val;
    })
);

write(
    'key1: val1\nkey2: key2'.reduceRight(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
        return prev + key + '=' + val;
    })
);

write(
    'Key2 match: ' + 'key1: val1\nkey2: key2'.find(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
        return key === 'key2';
    })
);

write(
    'Key2 index:' + 'key1: val1\nkey2: key2'.findIndex(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
        return key === 'key2';
    })
);

let exec = 'key1: val1\nkey2: key2'.findExec(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
    return key === 'key2';
});
write(
    'findExec index:' + exec.index
);
write(
    'findExec result: ' + exec
);

exec = 'key1: val1\nkey2: key2'.filterExec(/^(.*?): (.*)$/m, (prev, key, val, i, n0) => {
    return key === 'key2';
});
write(
    'filterExec index:' + exec[0].index
);
write(
    'filterExec result: ' + exec[0]
);
