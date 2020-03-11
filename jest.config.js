module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts'],
  cache: true,
  verbose: true,
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['**/src/**/*.spec.(js|jsx|ts)'],
  testURL: 'http://localhost/',
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov'],
  collectCoverageFrom: ['src/**/*.{js,vue,ts}', '!**/*.{interface,enum,service}.ts', '!src/*.ts'],
};
