import { rest } from "msw";
import { POSTS } from "./posts";
import { Post } from "@Post-app/types";

export const handlers = [
  rest.get("/posts", (_req, res, ctx) => {
    console.log("running posts", { _req });
    return res(ctx.json<Post[]>(POSTS));
  }),
];
