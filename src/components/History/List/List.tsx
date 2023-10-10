import React from "react";
import { useAppStore } from "../../../lib/store";
import { Item } from "../Item";

export function List() {
  const { interactions } = useAppStore();

  return (
    <ul className="px-4 my-4 rounded-md gap-1 overflow-y-scroll flex flex-col">
      {interactions.map((interaction) => (
        <Item key={interaction.id} interaction={interaction} />
      ))}
    </ul>
  );
}
