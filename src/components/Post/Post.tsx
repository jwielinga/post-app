import React from "react";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";

import { PostItemProps } from "./types";
import IconButton from "../IconButton/IconButton";

export default function PostItem({ id, onDown, onUp }: PostItemProps) {
  return (
    <li className="flex flex-row items-center justify-between h-20 p-2 my-2 bg-white rounded-md shadow-lg">
      <p>Post {id}</p>
      <div className="flex flex-col">
        {onUp && (
          <IconButton
            icon={<ArrowUpIcon />}
            onClick={onUp}
            aria-label="Move up"
          />
        )}
        {onDown && (
          <IconButton
            icon={<ArrowDownIcon />}
            onClick={onDown}
            aria-label="Move down"
          />
        )}
      </div>
    </li>
  );
}
