import React from "react";
import { useAppStore } from "../../../lib/store";
import { HistoryItem } from "../Item";

export function HistoryList() {
  const { interactions } = useAppStore();

  return (
    <div>
      {interactions.map((interaction) => (
        <HistoryItem key={interaction.id} interaction={interaction} />
      ))}
    </div>
  );
}
