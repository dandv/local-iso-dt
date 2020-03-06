module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/*.test.mjs',
  ],
  moduleFileExtensions: [
    'js',  // not used, but MANDATORY
    'mjs',  // actually used
  ],
  transform: {
    // Transform .mjs files
    '^.+\\.mjs$': 'babel-jest',
  },
};
