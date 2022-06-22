module.exports = {
  coverageReporters: [
    'lcov',
    'html',
    'json',
  ],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [
    '/node_modules/',
    'helper.js',
  ],
};
