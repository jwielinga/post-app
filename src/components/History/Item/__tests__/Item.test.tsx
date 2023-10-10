import { render, screen } from "@testing-library/react";

import { INTERACTIONS } from "@Post-app/mocks";

import { Item } from "../Item";
import { generateText } from "../../utils";

const TEST_INTERACTION = INTERACTIONS[0];

const text = generateText(TEST_INTERACTION);

describe("History Item", () => {
  it("should render the item title and description", () => {
    render(<Item interaction={TEST_INTERACTION} />);

    const listItem = screen.getByText(text);
    expect(listItem).toBeVisible();
  });

  it("should render the item with a button", () => {
    render(<Item interaction={TEST_INTERACTION} />);

    const button = screen.getByRole("button");
    expect(button).toBeVisible();
  });
});
