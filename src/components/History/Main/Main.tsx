import React from "react";
import { List } from "../List";

export function Main() {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-neutral w-96 h-fit box-content overflow-visible">
      <h1 className="flex items-center px-4 py-6 bg-white font-xl font-extrabold text-sky-900 rounded-t-md">
        List of actions committed
      </h1>
      <List />
    </div>
  );
}
