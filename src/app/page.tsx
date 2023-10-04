import List from "@Post-app/components/PostList/List";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex gap-24 row">
        <div className="flex flex-col gap-8">
          <h1 className="h-6 text-white">Sortable Post List</h1>
          <List />
        </div>
        <div className="flex flex-col shadow-md">
          <h1 className="bg-white">List of actions commited</h1>
          <div className="bg-slate-200"></div>
        </div>
      </div>
    </main>
  );
}
