import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Reports from "../../src/pages/Reports/Reports";
import { mockApi } from "../mocks/server";
import { renderWithAuth } from "../test-utils/renderWithAuth";

// Mock Framer Motion
import { vi } from "vitest";
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe("Reports Page", () => {
  it("displays loading initially", () => {
    renderWithAuth(<Reports />, {
      user: { firstName: "Test" },
    });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders reports when API succeeds", async () => {
    mockApi.getReports.mockResolvedValue([
      {
        id: 1,
        roversScore: 2,
        oppoScore: 1,
        oppoName: "United",
        mom: "Dave",
        dod: "Sam",
        description: "Great game.\n\  \nAnother paragraph.",
        date: new Date("2024-01-01"),
      },
    ]);

    renderWithAuth(<Reports />, {
      user: { firstName: "Test" },
    });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Trumpinton Rovers/i)).toBeInTheDocument();
    });

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("United")).toBeInTheDocument();
    expect(screen.getByText(/MOM: Dave/i)).toBeInTheDocument();
    expect(screen.getByText(/DOD: Sam/i)).toBeInTheDocument();
    expect(screen.getByText(/1 January 2024/i)).toBeInTheDocument();

    const paragraphs = screen.getAllByText(/Great game|Another paragraph/i);
    expect(paragraphs).toHaveLength(2);
  });

  it("renders 'No Reports Available' if API returns empty array", async () => {
    mockApi.getReports.mockResolvedValue([]);
    renderWithAuth(<Reports />, {
      user: { firstName: "Test" },
    });

    await waitFor(() => {
      expect(screen.getByText(/no reports available/i)).toBeInTheDocument();
    });
  });

  it("renders error message if API fails", async () => {
    mockApi.getReports.mockRejectedValue(new Error("API Error"));
    renderWithAuth(<Reports />, {
      user: { firstName: "Test" },
    });

    await waitFor(() => {
      expect(
        screen.getByText(/unable to retrieve reports/i)
      ).toBeInTheDocument();
    });
  });
});

