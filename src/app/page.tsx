"use client";

import { HistoryOverview, PostsOverview } from "@Post-app/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex gap-24 row h-[32rem]">
        <PostsOverview />
        <HistoryOverview />
      </div>
    </main>
  );
}
