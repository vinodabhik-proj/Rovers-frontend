import { render, screen } from "@testing-library/react";
import CardGrid from "../../src/components/CardGrid/CardGrid";
import { cards } from "../../src/data/cards";

test("renders all cards", () => {
  render(<CardGrid />);

  cards.forEach(c =>
    expect(screen.getByText(c.position)).toBeInTheDocument()
  );
});
