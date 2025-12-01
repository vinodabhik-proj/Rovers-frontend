import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

Object.assign(global, {
  TextEncoder,
  TextDecoder
});

globalThis.importMetaEnv = {
  VITE_API_URL: "http://localhost:3000"
};

Object.defineProperty(globalThis, "import", {
  value: { meta: { env: globalThis.importMetaEnv } }
});