import { Post } from "./post";

export type Interaction = {
  id: string;
  post: Pick<Post, "id" | "title">;
  oldPosition: number;
  newPosition: number;
  postsSnapShot: Post[];
};
