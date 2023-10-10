"use client";

/* eslint-disable @typescript-eslint/no-empty-function */
// context provider to keep track of posts, actions and interactions

import React, { createContext, useState, type SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";

import type { Post, Interaction } from "@Post-app/types";
import { PostActionProviders } from "./types";

type PostActionsContext = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  actions: Interaction[];
  setActions: (actions: SetStateAction<Interaction[]>) => void;
  timeTravel: (id: Interaction["id"]) => void;
  addAction: (action: Omit<Interaction, "id" | "interaction">) => void;
  movePost: (post: Post, newIndex: number) => void;
};

export const PostActionsContext = createContext<PostActionsContext>({
  posts: [],
  setPosts: () => {},
  actions: [],
  setActions: () => {},
  timeTravel: () => {},
  addAction: () => {},
  movePost: () => {},
});

export function PostActionsProvider({ children }: PostActionProviders) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [actions, setActions] = useState<Interaction[]>([]);

  const timeTravel = (id: Interaction["id"]) => {
    const index = actions.findIndex((action) => action.id === id);
    const newPosts = posts.slice(0, index + 1);
    const foundIndex = actions.findIndex((item) => item.id === id) ?? {};
    const slicedInteractions = actions.slice(foundIndex + 1);
    const { postsSnapShot = [] } = actions[foundIndex] ?? [];
    console.log({
      index,
      newPosts,
      foundIndex,
      slicedInteractions,
      postsSnapShot,
    });
    setPosts([...newPosts, ...postsSnapShot]);
    setActions(slicedInteractions);
  };

  const addAction = (action: Omit<Interaction, "id" | "interaction">) => {
    const newAction: Interaction = {
      ...action,
      id: uuidv4(),
      postsSnapShot: posts,
    };
    setActions([newAction, ...actions]);
  };

  const movePost = (post: Post, newIndex: number) => {
    const currentPosts = [...posts];
    const oldIndex = currentPosts.findIndex(({ id }) => id === post.id);
    currentPosts.splice(oldIndex, 1);
    currentPosts.splice(newIndex, 0, post);
    setPosts(currentPosts);
  };

  return (
    <PostActionsContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        actions,
        addAction,
        setActions,
        posts,
        setPosts,
        timeTravel,
        movePost,
      }}
    >
      {children}
    </PostActionsContext.Provider>
  );
}
