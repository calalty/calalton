module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
    '@next/next/no-img-element': 'off',
  },
};
