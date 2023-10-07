import { create } from "zustand";
import { trackHistory, type HistorySlice } from "./slices/history";
import { postsSlice, PostsSlice } from "./slices/posts";

type Slices = HistorySlice & PostsSlice;

export const useAppStore = create<Slices>()((...a) => ({
  ...trackHistory(...a),
  ...postsSlice(...a),
}));
