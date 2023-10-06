"use client";
import List from "@Post-app/components/PostList/List";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@Post-app/queries";
import { Post } from "@Post-app/types";

export default function Home() {
  const { data } = useQuery<Post[]>({ queryKey: ["Posts"], queryFn: getPosts });
  const posts = data?.slice(0, 5) ?? [];

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex gap-24 row">
        <div className="flex flex-col gap-8 w-96">
          <h1 className="h-6 text-white">Sortable Post List</h1>
          <List posts={posts} />
        </div>
        <div className="flex flex-col rounded-md shadow-lg w-96">
          <h1 className="flex items-center h-16 p-2 bg-white">
            List of actions commited
          </h1>
          <div className="bg-slate-200"></div>
        </div>
      </div>
    </main>
  );
}
