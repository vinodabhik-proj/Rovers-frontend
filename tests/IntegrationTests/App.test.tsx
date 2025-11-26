import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../src/App";

test("routes to home page by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Trumpington Rovers")).toBeInTheDocument();
});

test("routes to reports page", () => {
  render(
    <MemoryRouter initialEntries={["/reports"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText("Match Reports")).toBeInTheDocument();
});
