import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../../src/App";
import { mockApi } from "../mocks/server";

describe("App routing (integration)", () => {
  it("renders the home page at the root route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Navbar should always be present
    expect(
      screen.getByRole("navigation")
    ).toBeInTheDocument();

    // Home page content
    expect(
      screen.getByRole("heading", { level: 1 })
    ).toBeInTheDocument();
  });

  it("renders the reports page when navigating to /reports", async () => {
    mockApi.getReports.mockResolvedValue([
      {
        id: 1,
        roversScore: 2,
        oppoScore: 1,
        oppoName: "United",
        mom: "Dave",
        dod: "Sam",
        description: "Great game.",
        date: new Date("2024-01-01"),
      },
    ]);

    render(
      <MemoryRouter initialEntries={["/reports"]}>
        <App />
      </MemoryRouter>
    );

    // Page heading confirms routing worked
    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /match reports/i })
      ).toBeInTheDocument();
    });

    // Integration check: report content rendered
    expect(
      screen.getByText(/trumpinton rovers/i)
    ).toBeInTheDocument();
  });

  it("renders a 404 page for unknown routes", () => {
    render(
      <MemoryRouter initialEntries={["/does-not-exist"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/404 - page not found/i)
    ).toBeInTheDocument();
  });
});

