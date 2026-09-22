export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^lockwright-utils-generate-unique-id$':
      '<rootDir>/../pear-apps-utils-generate-unique-id/src/index.js'
  }
}
