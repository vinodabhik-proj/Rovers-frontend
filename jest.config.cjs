module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "rovers-frontend",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/tests/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"]
};