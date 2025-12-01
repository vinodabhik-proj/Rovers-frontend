import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

Object.assign(global, {
  TextEncoder,
  TextDecoder
});

Object.defineProperty(import.meta, "env", {
  value: {
    VITE_API_URL: "http://localhost:3000"
  }
});