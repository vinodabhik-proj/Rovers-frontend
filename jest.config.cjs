module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: ".",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          module: "esnext",
          target: "es2022",
          moduleResolution: "node",
          verbatimModuleSyntax: false,
          jsx: "react-jsx",
          types: ["jest", "node"],
          include: ["src", "types"]
        }
      }
    ]
  },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/tests/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"]
};
