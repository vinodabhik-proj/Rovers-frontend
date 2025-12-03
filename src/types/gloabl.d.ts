export {};

declare global {
  // Mocked env object available on globalThis in Jest
  var importMetaEnv: {
    VITE_API_URL: string;
  };
}
