import React from "react";
import { useAppStore } from "../../../lib/store";
import { HistoryItem } from "../Item";

export function List() {
  const { interactions } = useAppStore();

  return (
    <ul className="p-4 rounded-md gap-1 h-min">
      {interactions.map((interaction) => (
        <HistoryItem key={interaction.id} interaction={interaction} />
      ))}
    </ul>
  );
}
