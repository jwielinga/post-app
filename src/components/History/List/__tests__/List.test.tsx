// a test to test "../List" component

import { render, screen, waitFor } from "@testing-library/react";

import { INTERACTIONS, POSTS } from "@Post-app/mocks";

import { List } from "../List";
import { generateText } from "../../utils";
import { Interaction } from "@Post-app/types";

jest.mock("@Post-app/lib", () => ({
  useHistoryStore: () => ({
    interactions: INTERACTIONS,
    addPostInteraction: jest.fn(),
  }),
  usePostStore: () => ({
    posts: POSTS,
    movePost: jest.fn(),
  }),
  useSnapShotStore: () => ({
    addSnapshots: jest.fn(),
  }),
}));

const generateTestRegex = (interaction: Interaction) =>
  new RegExp(generateText(interaction), "i");

describe("List", () => {
  it("should render the list of posts", async () => {
    render(<List />);
    await waitFor(async () => {
      return screen.getByText(generateTestRegex(INTERACTIONS[0]));
    });

    const firstPost = screen.getByText(generateTestRegex(INTERACTIONS[0]));
    const lastPost = screen.getByText(
      generateTestRegex(INTERACTIONS[INTERACTIONS.length - 1])
    );

    return waitFor(async () => {
      expect(firstPost).toBeVisible();
      expect(lastPost).toBeVisible();
    });
  });
});
