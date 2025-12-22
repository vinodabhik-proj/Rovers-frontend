import { render, screen } from "@testing-library/react";
import CardGrid from "../../src/components/CardGrid/CardGrid";
import { cards } from "../../src/data/cards";

// Optional: mock framer-motion to avoid animation issues
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("CardGrid", () => {
  test("renders the section title", () => {
    render(<CardGrid />);

    expect(
      screen.getByRole("heading", {
        name: /the executive branch/i,
      })
    ).toBeInTheDocument();
  });

  test("renders one card per item in the cards data", () => {
    render(<CardGrid />);

    // Each card renders an h3
    const cardTitles = screen.getAllByRole("heading", { level: 3 });
    expect(cardTitles).toHaveLength(cards.length);
  });

  test("renders card images with accessible alt text", () => {
    render(<CardGrid />);

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(cards.length);

    images.forEach(img => {
      expect(img).toHaveAttribute("alt");
      expect(img.getAttribute("alt")).not.toBe("");
    });
  });

  test("renders card descriptions", () => {
    render(<CardGrid />);

    cards.forEach(card => {
      expect(
        screen.getByText(card.description)
      ).toBeInTheDocument();
    });
  });
});
