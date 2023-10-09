import React from "react";
import { List } from "../List";

export function Main() {
  return (
    <div className="flex flex-col rounded-md shadow-lg w-96 min-h-max">
      <h1 className="flex items-center px-4 py-6 bg-white font-xxl font-bold text-sky-900">
        List of actions commited
      </h1>
      <List />
    </div>
  );
}
