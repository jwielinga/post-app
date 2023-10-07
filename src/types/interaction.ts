import { Post } from "./post";

export enum InteractionKindEnum {
  UP = "up",
  DOWN = "down",
}

export type Interaction = {
  id: string;
  postId: Post["id"];
  kind: InteractionKindEnum;
  oldPosition: number;
  newPosition: number;
};
