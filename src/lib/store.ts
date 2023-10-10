import { create } from "zustand";
import { historySlice, type HistorySlice } from "./slices/history";
import { postsSlice, PostsSlice } from "./slices/posts";

type Slices = HistorySlice & PostsSlice;

export const useAppStore = create<Slices>()((...a) => ({
  ...postsSlice(...a),
  ...historySlice(...a),
}));
