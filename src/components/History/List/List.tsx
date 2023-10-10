import React from "react";

import { useHistoryStore } from "@Post-app/lib";

import { Item } from "../Item";

export function List() {
  const { interactions } = useHistoryStore();

  return (
    <ul className="px-4 my-4 rounded-md gap-[0.125rem] overflow-y-scroll max-h-[27rem] flex flex-col">
      {interactions.map((interaction) => (
        <Item key={interaction.id} interaction={interaction} />
      ))}
    </ul>
  );
}
