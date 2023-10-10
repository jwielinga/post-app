import React from "react";
import { List } from "../List";

export function Main() {
  return (
    <div className="flex flex-col gap-4 w-96">
      <h1 className="h-4 text-white font-bold text-xl">Sortable Post List</h1>
      <List />
    </div>
  );
}
