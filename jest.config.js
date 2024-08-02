// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom", // Use jsdom for browser-like environment
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   moduleNameMapper: {
//     "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
//   },
//   setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
// };

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Use jsdom for browser-like environment
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest", // Add this to handle ES modules
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock CSS imports
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transformIgnorePatterns: [
    "/node_modules/(?!axios).+\\.js$", // Add this to transform axios module
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{jsx,tsx}",
    "<rootDir>/src/pages/PayPalComponents/**/*.{jsx,tsx}",
    "<rootDir>/src/pages/404/**/*.{jsx,tsx}",
    "<rootDir>/src/pages/auth/**/*.{jsx,tsx}",

    "!<rootDir>/**/node_modules/",
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};
