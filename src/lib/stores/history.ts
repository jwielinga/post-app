import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

import { Interaction } from "@Post-app/types";

export type HistoryStore = {
  interactions: Interaction[];
  addPostInteraction: (
    interaction: Omit<Interaction, "id" | "postsSnapShot">
  ) => Interaction["id"];
  setInteractions: (interactions: Interaction[]) => void;
  timeTravel: (id: Interaction["id"]) => void;
};

export const useHistoryStore = create<HistoryStore>((set, get) => ({
  interactions: [],
  addPostInteraction: (interaction) => {
    const newId = uuidv4();
    set((state) => {
      return {
        ...state,
        interactions: [
          {
            ...interaction,
            id: newId,
            postsSnapShot: [],
          },
          ...state.interactions,
        ],
      };
    });

    return newId;
  },

  setInteractions: (interactions) =>
    set(() => ({
      interactions,
    })),
  timeTravel: (id) => {
    const currentInteractions = get()?.interactions ?? [];
    const foundIndex =
      currentInteractions.findIndex((item) => item.id === id) ?? 0;
    const slicedInteractions =
      currentInteractions.length === 1
        ? []
        : currentInteractions.slice(foundIndex + 1);

    set((state) => {
      // usePostStore.setState((state) => ({
      //   ...postStore,
      //   posts: useSnapShotStore().snapShots[slicedInteractions[0].id],
      // }));
      return {
        ...state,
        interactions: slicedInteractions,
      };
    });
  },
}));
