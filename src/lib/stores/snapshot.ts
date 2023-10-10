import { create } from "zustand";

import type { Interaction, Post } from "@Post-app/types";

type SnapShot = Record<Interaction["id"], Post[]>;

type SnapShotStore = {
  snapShots: SnapShot;
  addSnapshots: (id: Interaction["id"], posts: Post[]) => void;
};

export const useSnapShotStore = create<SnapShotStore>((set) => ({
  snapShots: {},
  addSnapshots: (id, posts) =>
    set((state) => ({
      ...state,
      snapShots: { ...state.snapShots, [id]: [...posts] },
    })),
}));
