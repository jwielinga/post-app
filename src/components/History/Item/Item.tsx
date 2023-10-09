import React from "react";

import { useAppStore } from "@Post-app/lib";

import type { HistoryItemProps } from "./types";

export function Item({
  interaction: { id, post, oldPosition, newPosition },
}: HistoryItemProps) {
  const { timeTravel, setPosts } = useAppStore();

  const handleButtonClick = () => {
    const posts = timeTravel(id);
    setPosts(posts);
  };

  return (
    <li className="inline-flex bg-white w-full p-2 rounded-sm text-sm">
      Moved post {post.title} from index {oldPosition + 1} to index{" "}
      {newPosition + 1}
      <button
        aria-label="Time travel"
        className="bg-secondary bold py-2 px-4 rounded-sm self-center cursor-pointer whitespace-nowrap text-center font-bold text-xs"
        onClick={handleButtonClick}
        type="button"
      >
        Time travel
      </button>
    </li>
  );
}
