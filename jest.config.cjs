module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: "tsconfig.test.json" }]
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/tests/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"]
};