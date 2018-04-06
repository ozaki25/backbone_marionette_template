module.exports = {
    env: {
        browser: true,
        jquery: true,
        node: true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'max-len': ['error', 100],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': ['off'],
        'space-before-blocks': ['error', { functions: 'always', keywords: 'always' }],
        eqeqeq: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
    },
    globals: {},
};
