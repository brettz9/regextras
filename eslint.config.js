import ashNazg from 'eslint-config-ash-nazg';

export default [
  {
    ignores: [
      'dist',
      'coverage'
    ]
  },
  ...ashNazg(['sauron', 'node']),
  ...ashNazg(['sauron', 'browser']).map((cfg) => {
    return {
      ...cfg,
      files: ['tests/**.js']
    };
  }),
  {
    settings: {
      polyfills: [
        'console',
        'document.body'
      ]
    }
  },
  {
    files: ['test/**.js'],
    languageOptions: {
      globals: {
        assert: 'readonly',
        expect: 'readonly'
      }
    },
    rules: {
      'n/no-unsupported-features/es-syntax': 0,
      'no-console': 0
    }
  },
  {
    files: ['test/**.js', 'tests/**.js'],
    rules: {
      'no-unused-vars': 0
    }
  },
  {
    files: ['*.md/*.js'],
    languageOptions: {
      globals: {
        require: false,
        RegExtras: false,
        condition: false,
        regex: false,
        str: false
      }
    },
    rules: {
      'new-cap': 0,
      'sonarjs/no-internal-api-use': 0,
      'sonarjs/prefer-single-boolean-return': 0,
      'unicorn/no-array-method-this-argument': 0,
      'unicorn/no-array-callback-reference': 0,
      'n/no-unsupported-features/es-syntax': 0,
      'n/no-extraneous-require': ['error', {allowModules: ['regextras']}],
      'import/unambiguous': 0,
      'import/no-commonjs': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-unresolved': 0,
      'no-shadow': ['error', {allow: ['RegExtras']}],
      'no-unused-vars': ['error', {
        varsIgnorePattern: 'matches|RegExtras|piglatinArray',
        argsIgnorePattern: 'matches'
      }]
    }
  },
  {
    rules: {
      // Disable for now
      'prefer-named-capture-group': 0,
      'require-unicode-regexp': 0,
      'unicorn/prefer-spread': 0,
      'eslint-comments/require-description': 0
    }
  }
];
