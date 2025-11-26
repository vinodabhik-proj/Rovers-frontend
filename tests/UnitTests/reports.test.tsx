import { render, screen, waitFor } from "@testing-library/react";
import Reports from "../../src/pages/Reports/Reports";
import * as api from "../../src/services/ReportService";

test("handles API success", async () => {
  jest.spyOn(api, "getReports").mockResolvedValue([
    {
      id: 1,
      roversScore: 2,
      oppoScore: 1,
      oppoName: "United",
      mom: "Dave",
      dod: "Sam",
      description: "Great game.",
      date: new Date("2024-01-01")
    }
  ]);

  render(<Reports />);

  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Trumpinton Rovers/i)).toBeInTheDocument();
  });
});
