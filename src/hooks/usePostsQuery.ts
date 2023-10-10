import { useQuery } from "@tanstack/react-query";
import type { Post } from "@Post-app/types";
import { getPosts } from "@Post-app/queries";
import { usePostActionContext } from "./usePostActionsContext";

export function usePostsQuery() {
  const { setPosts } = usePostActionContext();

  const onQuerySuccess = (data: Post[]) => {
    const slicedPosts = data?.slice(0, 5) ?? [];
    console.log("slicedPosts", slicedPosts);
    setPosts(slicedPosts);
  };

  useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    onSuccess: onQuerySuccess,
  });
}
