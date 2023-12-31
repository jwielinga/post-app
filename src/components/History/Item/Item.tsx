import React from "react";

import { useHistoryStore, usePostStore, useSnapShotStore } from "@Post-app/lib";

import type { HistoryItemProps } from "./types";
import { generateText } from "../utils";

export function Item({ interaction }: HistoryItemProps) {
  const { timeTravel } = useHistoryStore();
  const { snapShots } = useSnapShotStore();
  const { setPosts } = usePostStore();

  const handleButtonClick = () => {
    timeTravel(interaction.id);
    setPosts(snapShots[interaction.id]);
  };

  return (
    <li className="inline-flex items-center bg-white w-full p-2 rounded-sm text-sm gap-2">
      <p>{generateText(interaction)}</p>
      <button
        aria-label="Time travel"
        className="bg-secondary bold py-2 px-4 rounded-sm self-center cursor-pointer whitespace-nowrap text-center font-extrabold text-xs"
        onClick={handleButtonClick}
        type="button"
      >
        Time travel
      </button>
    </li>
  );
}
