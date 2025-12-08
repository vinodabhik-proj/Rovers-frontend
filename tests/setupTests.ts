import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

Object.assign(global, {
  TextEncoder,
  TextDecoder
});

// Mock Vite's import.meta.env in Jest
(globalThis as any).import_meta_env = {
  VITE_API_URL: "http://localhost:5173"
};

// Ensure code accessing import.meta.env works
Object.defineProperty(import.meta, "env", {
  value: (globalThis as any).import_meta_env,
  writable: false
});
