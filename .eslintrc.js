module.exports = {
    env: {
        browser: true,
        jquery: true,
        node: true,
    },
    extends: 'standard',
    parserOptions: {
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        'max-len': ['error', 100],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
    },
    globals: {},
};
