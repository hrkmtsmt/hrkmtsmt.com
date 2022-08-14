/** @type {import('@jest/types').Config.InitialOptions} */

const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1'
  }
};

module.exports = createJestConfig(customJestConfig);
