import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { useStore } from "zustand";

import { POSTS } from "@Post-app/mocks/posts";
import { postsSlice } from "@Post-app/lib/slices/posts";

import { List } from "../List";

// jest.mock("@Post-app/lib", () => ({
//   useAppStore: () => ({
//     posts: POSTS,
//     setPosts: jest.fn(),
//   }),
// }));

beforeEach(async () => {
  const initialStoreState = useStore.getState * postsSlice.set;
  render(<List />);
});

describe("List", () => {
  it("should render the list of posts", async () => {
    const firstPost = screen.getByText(new RegExp(POSTS[0].title));
    screen.debug();

    expect(firstPost).toBeVisible();
  });

  it("should render only 5 posts", () => {
    const posts = screen.getAllByRole("listitem");
    expect(posts.length).toBe(5);
  });
});
