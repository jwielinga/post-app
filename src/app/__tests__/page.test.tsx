/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Home from "../page";
import { QueryWrapper } from "@Post-app/test/wrapper";
import { POSTS } from "@Post-app/mocks/posts";

beforeEach(async () => {
  render(
    <QueryWrapper>
      <Home />
    </QueryWrapper>
  );

  return screen.findByText(POSTS[0].title);
});

describe("Home page", () => {
  it.skip("should render the home page", () => {
    screen.debug();
    expect(screen.getByRole("heading")).toHaveTextContent("Home");
  });
});
