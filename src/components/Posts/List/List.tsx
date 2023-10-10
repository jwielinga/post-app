"use client";

import React from "react";
import { Post } from "@Post-app/types";
import { useHistoryStore, usePostStore, useSnapShotStore } from "@Post-app/lib";

import { usePostsQuery } from "@Post-app/hooks";

import { Item } from "../Item";

export function List() {
  const { posts, movePost } = usePostStore();
  const { addPostInteraction } = useHistoryStore();
  const { addSnapshots } = useSnapShotStore();
  usePostsQuery();

  const handleUp = (
    event: React.MouseEvent<HTMLButtonElement>,
    post: Post,
    index: number
  ) => {
    event.preventDefault();
    const newPosition = index - 1;
    const interactionId = addPostInteraction({
      postId: post.id,
      oldPosition: index,
      newPosition,
    });
    addSnapshots(interactionId, posts);
    movePost(post, newPosition);
  };

  const handleDown = (
    event: React.MouseEvent<HTMLButtonElement>,
    post: Post,
    index: number
  ) => {
    event.preventDefault();
    const newPosition = index + 1;
    const interactionId = addPostInteraction({
      postId: post.id,
      oldPosition: index,
      newPosition,
    });
    addSnapshots(interactionId, posts);
    movePost(post, newPosition);
  };

  return (
    <ul className="h-max pb-2 flex flex-col gap-2 ">
      {posts.map((post, index) => (
        <Item
          key={post.id}
          id={post.id}
          {...(index !== 0 ? { onUp: (e) => handleUp(e, post, index) } : {})}
          {...(index !== posts.length - 1
            ? { onDown: (e) => handleDown(e, post, index) }
            : {})}
        />
      ))}
    </ul>
  );
}
