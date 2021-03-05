module.exports = {
  cacheDirectory: "<rootDir>/.jest-tmp",
  globals: {
    'ts-jest': {
      isolatedModules: true,
      diagnostics: {
        ignoreCodes: [151001] // suppress warnings about esModuleInterop
      }
    }
  },
  testEnvironment: "jest-environment-jsdom-global",
};
