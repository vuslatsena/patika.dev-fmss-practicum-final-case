// Tests that the CardList component renders without crashing
// Component can be rendered without errors
// It renders card components correctly, if starships data is available
// Doesn't render card components, if no starships data

/*

import React from "react";
import { render } from "@testing-library/react";
import { CardList } from "./CardList";

describe("CardList component", () => {
  it("should render without error", () => {
    render(<CardList />);
  });

  it("should render cards when there are starships data", () => {
    const mockStarships = [
      {
        name: "X-wing",
        model: "T-65B X-wing starfighter",
        hyperdrive_rating: "1.0",
      },
      {
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        hyperdrive_rating: "0.5",
      },
    ];
    const { getByTestId } = render(<CardList starships={mockStarships} />);
    expect(getByTestId("card-list").children.length).toBe(mockStarships.length);
  });

  it("should not render cards when there are no starships data", () => {
    const { getByTestId } = render(<CardList />);
    expect(getByTestId("card-list").children.length).toBe(0);
  });
});

*/