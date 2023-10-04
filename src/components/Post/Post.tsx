import React from "react";
import { PostItemProps } from "./types";

export default function PostItem({ title, onDown, onUp }: PostItemProps) {
  return (
    <li className="flex flex-row items-center h-20 p-2 my-2 bg-white rounded-md shadow-lg">
      <p>{title}</p>
      <div className="flex flex-col">
        {onUp && <button onClick={onUp}>Up</button>}
        {onDown && <button onClick={onDown}>Down</button>}
      </div>
    </li>
  );
}
