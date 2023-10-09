import React from "react";
import ChevronUpIcon from "@heroicons/react/24/solid/ChevronUpIcon";
import ChevronDownIcon from "@heroicons/react/24/solid/ChevronDownIcon";

import { PostItemProps } from "./types";
import IconButton from "../../IconButton/IconButton";

export default function Item({ title, onDown, onUp }: PostItemProps) {
  return (
    <li className="flex flex-row items-center justify-between h-20 p-2 my-2 bg-white rounded-md shadow-lg">
      <p>{title}</p>
      <div className="flex flex-col">
        {onUp && (
          <IconButton
            icon={<ChevronUpIcon />}
            onClick={onUp}
            aria-label="Move up"
          />
        )}
        {onDown && (
          <IconButton
            icon={<ChevronDownIcon />}
            onClick={onDown}
            aria-label="Move down"
          />
        )}
      </div>
    </li>
  );
}
