module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: ".",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: {
          tsconfigRootDir: __dirname,
          compilerOptions: {
            module: "esnext",
            target: "es2020",
            moduleResolution: "node",
            jsx: "react-jsx",
            verbatimModuleSyntax: false,
            esModuleInterop: true,
            types: ["jest", "node"]
          }
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

