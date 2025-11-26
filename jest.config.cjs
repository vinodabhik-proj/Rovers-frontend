module.exports = {
  preset: "ts-jest",
  rootDir: "rovers-frontend", 
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/tests/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"]
};