import React from "react";
import { IconButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

export default function IconButton({
  icon,
  className,
  ...restProps
}: IconButtonProps) {
  const classes = twMerge(
    "inline-flex items-center justify-center w-8 h-8 mr-2 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200",
    className
  );

  return (
    <button className={classes} {...restProps}>
      {React.cloneElement(icon, { className: "h-4 w-4 text-black" })}
    </button>
  );
}
