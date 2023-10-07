"use client";
import { HistoryList } from "@Post-app/components/History";
import List from "@Post-app/components/Posts/PostList/List";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex gap-24 row">
        <div className="flex flex-col gap-8 w-96">
          <h1 className="h-6 text-white">Sortable Post List</h1>
          <List />
        </div>
        <div className="flex flex-col rounded-md shadow-lg w-96">
          <h1 className="flex items-center h-16 p-2 bg-white">
            List of actions commited
          </h1>
          <HistoryList />
        </div>
      </div>
    </main>
  );
}
