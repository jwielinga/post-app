import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Interaction } from "@Post-app/types";

import { Item } from "../Item";

const INTERACTION: Interaction = {
  id: "029c99c7-b05d-497f-9805-c2cdec6cadf4",
  post: {
    id: 1,
    title: "Test Post",
  },
  oldPosition: 0,
  newPosition: 1,
  postsSnapShot: [],
};

describe("History Item", () => {
  it("should render the item title and description", () => {
    render(<Item interaction={INTERACTION} />);
    expect(screen.getByText(INTERACTION.post.title)).toBeVisible();
  });
});
