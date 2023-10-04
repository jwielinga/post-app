"use client";
import { getPosts } from "@Post-app/queries";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Post } from "@Post-app/types";
import { PostItem } from "../Post";

export default function List() {
  const { data } = useQuery<Post[]>({ queryKey: ["Posts"], queryFn: getPosts });

  return (
    <ul className="overflow-y-scroll h-96">
      {data?.map(({ id, title }) => (
        <PostItem key={id} title={title} />
      ))}
    </ul>
  );
}
