/* eslint-disable node/no-unsupported-features/es-syntax */

import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';

/**
 * @external RollupConfig
 * @type {PlainObject}
 * @see {@link https://rollupjs.org/guide/en#big-list-of-options}
 */

/**
 * @param {PlainObject} [config={}]
 * @param {string} [config.input='index']
 * @param {boolean} [config.minifying]
 * @param {string} [config.format='umd']
 * @returns {external:RollupConfig}
 */
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
      babel({
        babelHelpers: 'bundled'
      })
    ]
  };
  if (minifying) {
    nonMinified.plugins.push(terser());
  }
  return nonMinified;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  getRollupObject({minifying: false, format: 'umd'}),
  getRollupObject({minifying: true, format: 'umd'}),
  getRollupObject({minifying: false, format: 'es'}),
  getRollupObject({minifying: true, format: 'es'}),
  getRollupObject({minifying: false, format: 'es', input: 'main'}),
  getRollupObject({
    minifying: false, format: 'es', input: 'index-generators'
  }),
  getRollupObject({
    minifying: false, format: 'es', input: 'prototype'
  }),
  getRollupObject({
    minifying: false, format: 'es', input: 'regexp-prototype'
  }),
  getRollupObject({
    minifying: false, format: 'es', input: 'string-prototype'
  }),
  getRollupObject({minifying: false, format: 'umd', input: 'main'}),
  getRollupObject({
    minifying: false, format: 'umd', input: 'index-generators'
  }),
  getRollupObject({
    minifying: false, format: 'umd', input: 'prototype'
  }),
  getRollupObject({
    minifying: false, format: 'umd', input: 'regexp-prototype'
  }),
  getRollupObject({
    minifying: false, format: 'umd', input: 'string-prototype'
  })
];
