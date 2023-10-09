import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { POSTS } from "@Post-app/mocks/posts";

import List from "../List";

beforeEach(async () => {
  render(<List posts={POSTS.slice(0, 5)} />);
});

describe("List", () => {
  it("should render the list of posts", async () => {
    const firstPost = await screen.getByText(new RegExp(POSTS[0].title));

    await expect(firstPost).toBeVisible();
  });

  it("should render only 5 posts", () => {
    const posts = screen.getAllByRole("listitem");
    expect(posts.length).toBe(5);
  });
});
