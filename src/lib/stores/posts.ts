import { create } from "zustand";

import type { Post } from "@Post-app/types";

export type PostsStore = {
  posts: Post[];
  movePost: (post: Post, newIndex: number) => void;
  setPosts: (posts: Post[]) => void;
};

function movePost(arr: Post[], fromIndex: number, toIndex: number): Post[] {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
  return arr;
}

export const usePostStore = create<PostsStore>((set) => ({
  posts: [],
  movePost: (post, newIndex) =>
    set((state) => {
      const currentPosts = state.posts;
      const oldIndex = currentPosts.findIndex((p) => p.id === post.id);
      const movedPosts = movePost(currentPosts, oldIndex, newIndex);
      return {
        ...state,
        posts: movedPosts,
      };
    }),
  setPosts: (posts) => set((state) => ({ ...state, posts })),
}));
