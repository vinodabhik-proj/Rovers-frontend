import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import { mockApi } from "../mocks/server";

test("navbar link navigates to reports page", async () => {
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const user = userEvent.setup();

  await user.click(
    screen.getByRole("link", { name: /reports/i })
  );

  expect(
    await screen.findByRole("heading", { name: /match reports/i })
  ).toBeInTheDocument();
});
