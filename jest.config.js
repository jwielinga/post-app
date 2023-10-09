const nextJest = require("next/jest");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: {
    "^@Post-app/(.*)$": "<rootDir>/src/$1",
  },
  // modulePaths: ["<rootDir>/src"],
  // moduleNameMapper: {
  //   "^@post-app/(.*)$": "<rootDir>/src/$1",
  //   "^@post-app/lib": "<rootDir>/src/lib",
  // },
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
