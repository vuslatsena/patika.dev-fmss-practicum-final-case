//This test case checks that the Button component renders its children, 
//and also verifies that it responds to click events by invoking the provided onClick callback function.


/*
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders children and responds to click events", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick}>
        Click me!
      </Button>
    );
    const button = screen.getByRole("button", { name: /Click me!/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
*/