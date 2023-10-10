import { useQuery } from "@tanstack/react-query";
import type { Post } from "@Post-app/types";
import { usePostStore } from "@Post-app/lib";
import { getPosts } from "@Post-app/queries";

export function usePostsQuery() {
  const { setPosts } = usePostStore();

  const onQuerySuccess = (data: Post[]) => {
    const slicedPosts = data?.slice(0, 5) ?? [];
    setPosts(slicedPosts);
  };

  useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    onSuccess: onQuerySuccess,
  });
}
