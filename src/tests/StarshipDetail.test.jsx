//This test checks that the component renders all the starship details correctly, 
//given a starship object as props.


/*

import { render, screen } from "@testing-library/react";
import { StarshipDetail } from "./StarshipDetail";

const mockStarship = {
  name: "X-wing",
  model: "T-65B X-wing",
  cargo_capacity: "110",
  crew: "1",
  hyperdrive_rating: "1.0",
  passengers: "0",
  max_atmosphering_speed: "1050",
  manufacturer: "Incom Corporation",
};

describe("StarshipDetail", () => {
  it("should render the starship details correctly", () => {
    render(<StarshipDetail starship={mockStarship} />);
    expect(screen.getByText(mockStarship.name)).toBeInTheDocument();
    expect(screen.getByText(`Model: ${mockStarship.model}`)).toBeInTheDocument();
    expect(screen.getByText(`Cargo Capacity: ${mockStarship.cargo_capacity}`)).toBeInTheDocument();
    expect(screen.getByText(`Crew: ${mockStarship.crew}`)).toBeInTheDocument();
    expect(screen.getByText(`Hyperdrive Rating: ${mockStarship.hyperdrive_rating}`)).toBeInTheDocument();
    expect(screen.getByText(`Passengers: ${mockStarship.passengers}`)).toBeInTheDocument();
    expect(screen.getByText(`Max Atmosphere Speed: ${mockStarship.max_atmosphering_speed}`)).toBeInTheDocument();
    expect(screen.getByText(`Manufacturer: ${mockStarship.manufacturer}`)).toBeInTheDocument();
  });
});

*/