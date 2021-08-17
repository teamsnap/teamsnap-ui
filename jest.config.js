module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  transform: { 'ˆ.+\\.tsx?$': ['babel-jest'] },
  testEnvironment: 'jest-environment-jsdom',
};
