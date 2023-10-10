import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { POSTS } from "@Post-app/mocks/posts";
import { QueryWrapper } from "@Post-app/test";

import { List } from "../List";
import { Post } from "@Post-app/types";

jest.mock("@Post-app/lib", () => ({
  useAppStore: () => ({
    posts: POSTS,
    setPosts: jest.fn(),
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

    expect(firstPost).toBeVisible();
    expect(lastPost).toBeVisible();
  });
});
