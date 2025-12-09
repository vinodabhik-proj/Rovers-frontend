import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../src/App";
import { mockApi } from "../mocks/server";

test("routes to home page by default", () => {

  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Trumpington Rovers")).toBeInTheDocument();
});

test("routes to reports page", async () => {
  
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

  await waitFor(() => {
    expect(screen.getByText("Match Reports")).toBeInTheDocument();
  });
});
