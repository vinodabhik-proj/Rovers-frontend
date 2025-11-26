import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";

test("navbar links navigate correctly", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  await userEvent.click(screen.getByText("Reports"));
  expect(screen.getByText("Match Reports")).toBeInTheDocument();
});
