import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Navbar from "../../src/components/navbar/Navbar";
import { renderWithAuth } from "../test-utils/renderWithAuth";

describe("Navbar", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders nothing when loading", () => {
    const { container } = renderWithAuth(<Navbar />, {
      loading: true,
    });

    expect(container.firstChild).toBeNull();
  });

  it("shows Login link when not authenticated", () => {
    renderWithAuth(<Navbar />, {
      user: null,
    });

    const loginLink = screen.getByRole("link", { name: /login/i });

    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  it("shows username and logout button when authenticated", () => {
    renderWithAuth(<Navbar />, {
      user: { firstName: "Abhik" },
    });

    expect(screen.getByText("Hi, Abhik")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /logout/i })
    ).toBeInTheDocument();
  });

  it("calls logout when logout button is clicked", () => {
    const { logout } = renderWithAuth(<Navbar />, {
      user: { firstName: "Abhik" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /logout/i })
    );

    expect(logout).toHaveBeenCalledTimes(1);
  });

  it("renders Home and Reports links", () => {
    renderWithAuth(<Navbar />);

    expect(
      screen.getByRole("link", { name: /home/i })
    ).toHaveAttribute("href", "/");

    expect(
      screen.getByRole("link", { name: /reports/i })
    ).toHaveAttribute("href", "/reports");
  });

  it("renders the club emblem image", () => {
    renderWithAuth(<Navbar />);

    const emblem = screen.getByRole("img", { name: /club icon/i });

    expect(emblem).toBeInTheDocument();
    expect(emblem).toHaveAttribute("src");
  });

  it("renders the user icon", () => {
    renderWithAuth(<Navbar />);

    expect(screen.getByTestId("user-icon")).toBeInTheDocument();
  });

});



