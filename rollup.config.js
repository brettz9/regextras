import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import {minify} from 'uglify-es';

function getRollupObject ({input = 'index', minifying, format = 'umd'} = {}) {
    const nonMinified = {
        input: `src/${input}.js`,
        output: {
            exports: 'named',
            format,
            file: `dist/${input}-${format}${minifying ? '.min' : ''}.js`,
            name: 'RegExtras'
        },
        plugins: [
            babel()
        ]
    };
    if (minifying) {
        nonMinified.plugins.push(uglify(null, minify));
    }
    return nonMinified;
};
export default [
    getRollupObject(),
    getRollupObject({minifying: true}),
    getRollupObject({minifying: false, format: 'es'}),
    getRollupObject({minifying: true, format: 'es'}),
    getRollupObject({minifying: false, format: 'es', input: 'index-generators'}),
    getRollupObject({minifying: false, format: 'es', input: 'prototype'}),
    getRollupObject({minifying: false, format: 'es', input: 'regexp-prototype'}),
    getRollupObject({minifying: false, format: 'es', input: 'string-prototype'}),
    getRollupObject({minifying: false, format: 'umd', input: 'index-generators'}),
    getRollupObject({minifying: false, format: 'umd', input: 'prototype'}),
    getRollupObject({minifying: false, format: 'umd', input: 'regexp-prototype'}),
    getRollupObject({minifying: false, format: 'umd', input: 'string-prototype'})
];
