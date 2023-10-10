import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Post from "../Item";

const ID = 1;
const TEXT = "Post 1";

describe("Post", () => {
  it("should render the todo with the title visible", () => {
    render(<Post id={ID} />);
    expect(screen.getByText(TEXT)).toBeInTheDocument();
  });

  it("should call the onUp callback when the up button is clicked", () => {
    const onUp = jest.fn();
    render(<Post id={ID} onUp={onUp} />);
    fireEvent.click(screen.getByLabelText("Move up"));
    expect(onUp).toHaveBeenCalled();
  });

  it("should call the onDown callback when the down button is clicked", () => {
    const onDown = jest.fn();
    render(<Post id={ID} onDown={onDown} />);
    fireEvent.click(screen.getByLabelText("Move down"));
    expect(onDown).toHaveBeenCalled();
  });

  it("should only show up icon button once onUp prop is providerd", () => {
    const onUp = jest.fn();
    render(<Post id={ID} onUp={onUp} />);
    expect(screen.getByLabelText("Move up")).toBeInTheDocument();
    expect(screen.queryByLabelText("Move down")).not.toBeInTheDocument();
  });

  it("should only show down icon button once onDown prop is providerd", () => {
    const onDown = jest.fn();
    render(<Post id={ID} onDown={onDown} />);
    expect(screen.getByLabelText("Move down")).toBeInTheDocument();
    expect(screen.queryByLabelText("Move up")).not.toBeInTheDocument();
  });
});
