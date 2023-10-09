import React from "react";
import type { HistoryItemProps } from "./types";

export function HistoryItem({
  interaction: { kind, postId, oldPosition, newPosition },
}: HistoryItemProps) {
  return (
    <li className="inline-flex bg-white w-full p-2">
      Moved post {postId} from index {oldPosition + 1} to index{" "}
      {newPosition + 1}
      <button className="bg-secondary bold py-2 px-4 rounded-sm self-center cursor-pointer whitespace-nowrap text-center">
        Time travel
      </button>
    </li>
  );
}
