import { vi } from "vitest";

// Default mock handlers
export const mockApi = {
  getReports: vi.fn(),
};

// Mock fetch globally
export function setupFetchMock() {
  vi.stubGlobal("fetch", async (url: string, options?: RequestInit) => {
    // Example route: /reports
    if (url.includes("/reports")) {
      return {
        ok: true,
        json: async () => await mockApi.getReports(),
      };
    }

    // Fallback if no route matched
    return {
      ok: false,
      json: async () => ({ error: "Unknown API route" }),
    };
  });
}

// Reset mocks for clean test runs
export function resetApiMocks() {
  mockApi.getReports.mockReset();
}
