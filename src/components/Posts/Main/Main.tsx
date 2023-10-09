import React from "react";
import { List } from "../List";

export const Main = () => {
  return (
    <div className="flex flex-col gap-8 w-96">
      <h1 className="h-6 text-white font-bold text-xl">Sortable Post List</h1>
      <List />
    </div>
  );
};
