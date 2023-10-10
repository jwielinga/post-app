import { rest } from "msw";

import { Post } from "@Post-app/types";

import { POSTS } from "./posts";

export const handlers = [
  rest.get("/posts", (_req, res, ctx) => {
    return res(ctx.json<Post[]>(POSTS));
  }),
];
