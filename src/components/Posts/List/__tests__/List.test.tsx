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

    expect(firstPost).toBeVisible();
  });

  it("should render only 5 posts", () => {
    const posts = screen.getAllByRole("listitem");
    expect(posts.length).toBe(5);
  });
});
