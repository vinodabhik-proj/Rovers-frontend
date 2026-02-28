import { ReactElement } from "react";
import { render } from "@testing-library/react";
import { vi } from "vitest";
import getApiUrl from "../../src/hooks/apiUrl";

type ApiOverride = {
  apiUrl?: string;
};

export function renderLogin(
  ui: ReactElement,
  { apiUrl = "http://localhost:5000" }: ApiOverride = {}
) {
  const mockedGetApiUrl = vi.mocked(getApiUrl);
  mockedGetApiUrl.mockReturnValue(apiUrl);

  return render(ui);
}
