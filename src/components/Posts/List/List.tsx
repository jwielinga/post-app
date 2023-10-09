"use client";
import React from "react";
import { PostItem } from "../Post";
import { InteractionKindEnum, Post } from "@Post-app/types";
import { useAppStore } from "@Post-app/lib";
import { getPosts } from "@Post-app/queries";
import { useQuery } from "@tanstack/react-query";

const getCurrentPosition = (posts: Post[], id: Post["id"]) =>
  posts.findIndex((post) => post.id === id);

export function List() {
  const { addPostInteraction, posts, setPosts, movePost } = useAppStore();

  const onQuerySuccess = (data: Post[]) => {
    const posts = data?.slice(0, 5) ?? [];
    setPosts(posts);
  };

  useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    onSuccess: onQuerySuccess,
  });

  const handleUp = (post: Post, index: number) => {
    console.log("handleUp", post, index);
    const newPosition = index - 1;
    addPostInteraction({
      postId: post.id,
      kind: InteractionKindEnum.UP,
      oldPosition: index,
      newPosition,
    });
    movePost(post, newPosition);
  };

  const handleDown = (post: Post, index: number) => {
    console.log("handleDown", post, index);
    const newPosition = index + 1;
    addPostInteraction({
      postId: post.id,
      kind: InteractionKindEnum.DOWN,
      oldPosition: index,
      newPosition,
    });
    movePost(post, newPosition);
  };

  return (
    <ul className="overflow-y-scroll h-max">
      {posts?.map((post, index) => (
        <PostItem
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
