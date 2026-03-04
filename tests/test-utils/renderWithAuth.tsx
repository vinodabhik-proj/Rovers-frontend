import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { useAuth } from "../../src/hooks/auth";
import type { User } from "../../src/models/User";

type AuthOverrides = {
  user?: Partial<User> | null;
  loading?: boolean;
  logout?: () => Promise<void>;
};

export function renderWithAuth(
  ui: ReactElement,
  {
    user = null,
    loading = false,
    logout = vi.fn().mockResolvedValue(undefined),
  }: AuthOverrides = {}
) {
  const mockedUseAuth = vi.mocked(useAuth);

  mockedUseAuth.mockReturnValue({
    user: user
      ? ({
          id: 1,
          firstName: "Test",
          lastName: "User",
          roles: [],
          ...user, // allow overrides
        } as User)
      : null,
    loading,
    logout,
  });

  return {
    logout,
    ...render(
      <BrowserRouter>
        {ui}
      </BrowserRouter>
    ),
  };
}
