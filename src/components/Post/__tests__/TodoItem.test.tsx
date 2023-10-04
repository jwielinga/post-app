import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Post from "../Post";

describe("Post", () => {
  it("should render the todo with the title visible", () => {
    render(<Post title="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("should call the onUp callback when the up button is clicked", () => {
    const onUp = jest.fn();
    render(<Post title="Test" onUp={onUp} />);
    fireEvent.click(screen.getByText("Up"));
    expect(onUp).toHaveBeenCalled();
  });

  it("should call the onDown callback when the down button is clicked", () => {
    const onDown = jest.fn();
    render(<Post title="Test" onDown={onDown} />);
    fireEvent.click(screen.getByText("Down"));
    expect(onDown).toHaveBeenCalled();
  });
});
