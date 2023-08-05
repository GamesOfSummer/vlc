module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // roots: [
    //   '<rootDir>/source/' // pointing to tests directory
    // ]
    modulePathIgnorePatterns: [
      "<rootDir>/build/"
    ],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
      "^.+\\.(js|jsx)$": "babel-jest"
    },
  };