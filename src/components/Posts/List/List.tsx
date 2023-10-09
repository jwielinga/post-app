"use client";

import React from "react";
import { Post } from "@Post-app/types";
import { useAppStore } from "@Post-app/lib";
import { getPosts } from "@Post-app/queries";
import { useQuery } from "@tanstack/react-query";

import { Item } from "../Item";

export function List() {
  const { addPostInteraction, posts, setPosts, movePost } = useAppStore();

  const onQuerySuccess = (data: Post[]) => {
    const slicedPosts = data?.slice(0, 5) ?? [];
    setPosts(slicedPosts);
  };

  useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    onSuccess: onQuerySuccess,
  });

  const handleUp = (post: Post, index: number) => {
    const newPosition = index - 1;
    addPostInteraction({
      post: {
        id: post.id,
        title: post.title,
      },
      oldPosition: index,
      newPosition,
      postsSnapShot: posts,
    });
    movePost(post, newPosition);
  };

  const handleDown = (post: Post, index: number) => {
    const newPosition = index + 1;
    addPostInteraction({
      post: {
        id: post.id,
        title: post.title,
      },
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
          title={post.title}
          {...(index !== 0 ? { onUp: () => handleUp(post, index) } : {})}
          {...(index !== posts.length
            ? { onDown: () => handleDown(post, index) }
            : {})}
        />
      ))}
    </ul>
  );
}
