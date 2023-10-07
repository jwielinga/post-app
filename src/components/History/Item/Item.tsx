import React from "react";
import type { HistoryItemProps } from "./types";

export function HistoryItem({
  interaction: { kind, postId, oldPosition, newPosition },
}: HistoryItemProps) {
  return (
    <li className="inline-flex">
      Moved post {postId} from index {oldPosition} to index {newPosition}
    </li>
  );
}
