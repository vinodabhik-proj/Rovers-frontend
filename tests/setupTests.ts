import "@testing-library/jest-dom/vitest";
import { TextEncoder, TextDecoder } from "util";
import { vi, beforeEach } from "vitest";
import { setupFetchMock, resetApiMocks } from "./mocks/server";

// Mock IntersectionObserver used by Framer Motion or other components
class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

// Setup global fetch mock for API calls
setupFetchMock();

// Reset mocks before each test
beforeEach(() => {
  resetApiMocks();
});

// Provide TextEncoder/TextDecoder globally
Object.assign(global, { TextEncoder, TextDecoder });

// Mock Vite environment variables
Object.defineProperty(import.meta, "env", {
  value: {
    VITE_API_URL: "http://localhost:3000",
  },
  writable: false,
});

// Mock useAuth hook
vi.mock("../src/hooks/auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../src/hooks/apiUrl", () => ({
  default: vi.fn(),
}));