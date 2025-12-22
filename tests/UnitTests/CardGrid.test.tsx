import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import CardGrid from "../../src/components/CardGrid/CardGrid";
import { cards } from "../../src/data/cards";

// Mock framer-motion to avoid animation + viewport issues
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("CardGrid", () => {
  it("renders the section title", () => {
    render(<CardGrid />);

    expect(
      screen.getByRole("heading", {
        name: /the executive branch/i,
      })
    ).toBeInTheDocument();
  });

  it("renders one card per item in the cards data", () => {
    render(<CardGrid />);

    // Each card renders an h3
    const cardTitles = screen.getAllByRole("heading", { level: 3 });
    expect(cardTitles).toHaveLength(cards.length);
  });

  it("renders card images with accessible alt text", () => {
    render(<CardGrid />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(cards.length);

    images.forEach(img => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  it("renders card descriptions", () => {
    render(<CardGrid />);

    cards.forEach(card => {
      expect(
        screen.getByText(card.description)
      ).toBeInTheDocument();
    });
  });
});

