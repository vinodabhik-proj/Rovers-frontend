import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Navbar from "../../src/components/navbar/Navbar";

describe("Navbar", () => {
  it("renders Home and Reports nav links with correct hrefs", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole("link", { name: /home/i });
    const reportsLink = screen.getByRole("link", { name: /reports/i });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    expect(reportsLink).toBeInTheDocument();
    expect(reportsLink).toHaveAttribute("href", "/reports");
  });

  it("renders the club emblem image", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const emblem = screen.getByRole("img", { name: /club icon/i });
    expect(emblem).toBeInTheDocument();
    expect(emblem).toHaveAttribute("src");
  });

  it("renders the user icon", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const userIcon = screen.getByTestId("user-icon");
    expect(userIcon).toBeInTheDocument();
  });
});


