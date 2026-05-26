/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/__tests__/**/*.test.ts', '<rootDir>/src/__tests__/**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/e2e/', '/.next/', '/tests/'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: { module: 'commonjs' } }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

module.exports = config
