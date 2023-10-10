import { render, screen } from "@testing-library/react";

import { INTERACTIONS, POSTS } from "@Post-app/mocks";
import { QueryWrapper } from "@Post-app/test";
import type { Post } from "@Post-app/types";

import { List } from "../List";

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

beforeEach(async () => {
  render(
    <QueryWrapper>
      <List />
    </QueryWrapper>
  );
});

const getRegExpTitle = (id: Post["id"]) => new RegExp(`Post ${id}`, "i");

describe("List", () => {
  it("should render the list of posts", async () => {
    const firstPost = screen.getByText(getRegExpTitle(POSTS[0].id));
    const lastPost = screen.getByText(
      getRegExpTitle(POSTS[POSTS.length - 1].id)
    );
    screen.debug();

    expect(firstPost).toBeVisible();
    expect(lastPost).toBeVisible();
  });
});
