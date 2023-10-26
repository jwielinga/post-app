import { useQuery } from "@tanstack/react-query";
import type { Post } from "@Post-app/types";
import { usePostStore } from "@Post-app/lib";
import { getPosts } from "@Post-app/queries";

export function usePostsQuery() {
  const { setPosts } = usePostStore();

  useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    onSuccess: (data) => setPosts(data),
  });
}
