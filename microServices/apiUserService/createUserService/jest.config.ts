/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const jestConfig = {
  root: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/***/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  modulePathIgnorePatterns: [
    '<rootDir>/src/interface'
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)']
}

export default jestConfig

// module.exports = {
//   root: ['<rootDir>/src'],
//   collectCoverageFrom: ['<rootDir>/src/***/*.ts'],
//   coverageDirectory: 'coverage',
//   coverageProvider: 'v8',
//   testEnvironment: 'node',
//   transform: {
//     '.+\\.ts$': 'ts-jest'
//   },
//   modulePathIgnorePatterns: [
//     '<rootDir>/src/interface'
//   ],
// }
