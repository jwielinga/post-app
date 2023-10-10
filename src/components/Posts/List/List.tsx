"use client";

import React from "react";
import { Post } from "@Post-app/types";

import { usePostActionContext, usePostsQuery } from "@Post-app/hooks";

import { Item } from "../Item";

export function List() {
  const { posts, movePost, addAction } = usePostActionContext();
  usePostsQuery();

  const handleUp = (post: Post, index: number) => {
    const newPosition = index - 1;
    addAction({
      postId: post.id,
      oldPosition: index,
      newPosition,
      postsSnapShot: posts,
    });
    movePost(post, newPosition);
  };

  const handleDown = (post: Post, index: number) => {
    const newPosition = index + 1;
    addAction({
      postId: post.id,
      oldPosition: index,
      newPosition,
      postsSnapShot: posts,
    });
    movePost(post, newPosition);
  };

  return (
    <ul className="overflow-y-scroll h-max pb-2">
      {posts?.map((post, index) => (
        <Item
          key={post.id}
          id={post.id}
          {...(index !== 0 ? { onUp: () => handleUp(post, index) } : {})}
          {...(index !== posts.length - 1
            ? { onDown: () => handleDown(post, index) }
            : {})}
        />
      ))}
    </ul>
  );
}
