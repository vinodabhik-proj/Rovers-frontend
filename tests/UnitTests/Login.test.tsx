import { screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import Login from "../../src/pages/Login/Login";
import { renderLogin } from "../test-utils/renderLogin";

describe("Login", () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Login heading", () => {
    renderLogin(<Login />);

    expect(
      screen.getByRole("heading", { name: /login/i })
    ).toBeInTheDocument();
  });

  it("renders Microsoft login card", () => {
    renderLogin(<Login />);

    expect(
      screen.getByText(/microsoft/i)
    ).toBeInTheDocument();
  });

  it("redirects to Microsoft login on click", () => {
    const apiUrl = "http://test-api.com";

    renderLogin(<Login />, { apiUrl });

    const card = screen.getByText(/microsoft/i).closest(".loginGrid");

    // Mock window.location
    const locationMock = vi.spyOn(window, "location", "get");
    const assignMock = vi.fn();

    Object.defineProperty(window, "location", {
      value: { href: "" },
      writable: true,
    });

    fireEvent.click(screen.getByText(/microsoft/i));

    expect(window.location.href).toBe(
      `${apiUrl}/auth/entra/login`
    );

    locationMock.mockRestore();
  });

});
