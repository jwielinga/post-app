"use client";
import React from "react";
import { PostItem } from "../Post";
import { ListProps } from "./types";

export default function List({ posts }: ListProps) {
  return (
    <ul className="overflow-y-scroll h-max">
      {posts?.map(({ id, title }, index) => (
        <PostItem
          key={id}
          title={title}
          {...(index !== 0 ? { onUp: (): void => {} } : {})}
          {...(index !== posts.length ? { onDown: (): void => {} } : {})}
        />
      ))}
    </ul>
  );
}
