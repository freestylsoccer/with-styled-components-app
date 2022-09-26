module.exports = {
  catalogs: [
    {
      path: '<rootDir>/locale/{locale}',
      include: ['<rootDir>/src'],
      exclude: ['**/node_modules/**'],
    },
  ],
  // compileNamespace: 'cjs',
  // extractBabelOptions: {},
  fallbackLocales: {},
  format: 'minimal',
  formatOptions: { origins: false, lineNumbers: false },
  sourceLocale: 'en',
  locales: ['en', 'es'],
  orderBy: 'messageId',
  pseudoLocale: '',
  rootDir: '.',
}
