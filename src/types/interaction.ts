import { Post } from "./post";

export type Interaction = {
  id: string;
  postId: Post["id"];
  oldPosition: number;
  newPosition: number;
  postsSnapShot: Post[];
};
