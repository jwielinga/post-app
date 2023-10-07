import { StateCreator } from "zustand";
import { Interaction } from "@Post-app/types";

export type HistorySlice = {
  interactions: Interaction[];
  addPostInteraction: (interaction: Interaction) => void;
};

export const trackHistory: StateCreator<HistorySlice> = (set) => ({
  interactions: [],
  addPostInteraction: (interaction) =>
    set((state) => ({
      interactions: [...state.interactions, interaction],
    })),
});
