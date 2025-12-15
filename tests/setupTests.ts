import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";
import { vi, beforeEach } from "vitest";
import { setupFetchMock, resetApiMocks } from "./mocks/server";

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

setupFetchMock();

beforeEach(() => {
  resetApiMocks();
});

Object.assign(global, {
  TextEncoder,
  TextDecoder
});

// Mock Vite's import.meta.env in Jest
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_API_URL: 'http://localhost:3000',
  },
  writable: false,
});

