import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { POSTS } from "@Post-app/mocks/posts";
import { QueryWrapper } from "@Post-app/test";

import { List } from "../List";

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

const regExpTitle = new RegExp(POSTS[0].title, "i");

describe("List", () => {
  it("should render the list of posts", async () => {
    const firstPost = screen.getByText(regExpTitle);
    const lastPost = screen.getByText(
      new RegExp(POSTS[POSTS.length - 1].title, "i")
    );

    expect(firstPost).toBeVisible();
    expect(lastPost).toBeVisible();
  });
});
