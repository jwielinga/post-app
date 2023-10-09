import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { Interaction, Post } from "@Post-app/types";

export type HistorySlice = {
  interactions: Interaction[];
  addPostInteraction: (interaction: Omit<Interaction, "id">) => void;
  setInteractions: (interactions: Interaction[]) => void;
  timeTravel: (id: Interaction["id"]) => Post[];
};

export const historySlice: StateCreator<HistorySlice> = (set, get) => ({
  interactions: [],
  addPostInteraction: (interaction) =>
    set((state) => ({
      interactions: [{ ...interaction, id: uuidv4() }, ...state.interactions],
    })),
  setInteractions: (interactions) =>
    set(() => ({
      interactions,
    })),
  timeTravel: (id) => {
    const foundIndex =
      get()?.interactions.findIndex((item) => item.id === id) ?? {};

    const slicedInteractions = get()?.interactions.slice(foundIndex);
    set(() => ({ interactions: slicedInteractions }));
    const { postsSnapShot = [] } = slicedInteractions[0];
    return postsSnapShot;
  },
});
