import { StateCreator } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { Interaction } from "@Post-app/types";

export type HistorySlice = {
  interactions: Interaction[];
  addPostInteraction: (interaction: Interaction) => void;
};

export const trackHistory: StateCreator<HistorySlice> = (set) => ({
  interactions: [],
  addPostInteraction: (interaction) =>
    set((state) => ({
      interactions: [{ ...interaction, id: uuidv4() }, ...state.interactions],
    })),
});
