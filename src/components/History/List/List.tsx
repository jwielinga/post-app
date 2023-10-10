import React from "react";
import { usePostActionContext } from "@Post-app/hooks";
import { Item } from "../Item";

export function List() {
  const { actions } = usePostActionContext();

  return (
    <ul className="px-4 my-4 rounded-md gap-1 overflow-y-scroll flex flex-col">
      {actions.map((interaction) => (
        <Item key={interaction.id} interaction={interaction} />
      ))}
    </ul>
  );
}
