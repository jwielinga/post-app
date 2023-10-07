import { getPosts } from "@Post-app/queries";
import type { Post } from "@Post-app/types";
import { useQuery } from "@tanstack/react-query";
import { StateCreator } from "zustand";

export type PostsSlice = {
  posts: Post[];
  movePost: (post: Post, newIndex: number) => void;
  setPosts: (posts: Post[]) => void;
};

export const postsSlice: StateCreator<PostsSlice> = (set) => ({
  posts: [],
  movePost: (post, newIndex) =>
    set(({ posts }) => {
      const oldIndex = posts.findIndex((p) => p.id === post.id);
      posts.splice(oldIndex, 1);
      posts.splice(newIndex, 0, post);
      return { posts };
    }),
  setPosts: (posts) => set({ posts }),
});
