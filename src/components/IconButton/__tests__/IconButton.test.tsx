import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckCircleIcon from "@heroicons/react/24/solid/CheckCircleIcon";

import IconButton from "../IconButton";

describe("IconButton", () => {
  it("should render the icon", () => {
    const handleClick = jest.fn();
    render(
      <IconButton
        onClick={handleClick}
        date-testid="text-icon"
        icon={<CheckCircleIcon />}
      />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call the onClick callback when the button is clicked", () => {
    const onClick = jest.fn();
    render(<IconButton onClick={onClick} icon={<CheckCircleIcon />} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
