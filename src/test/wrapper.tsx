import React, { ReactNode } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { useAppStore } from "@Post-app/lib";
import { getPosts } from "@Post-app/queries";
import { Post } from "@Post-app/types";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function PostsWrapper({ children }: { children: ReactNode }) {
  const { setPosts } = useAppStore();

  const onQuerySuccess = (data: Post[]) => {
    const slicedPosts = data?.slice(0, 5) ?? [];
    setPosts(slicedPosts);
  };

  useQuery<Post[]>({
    queryKey: ["Posts"],
    queryFn: getPosts,
    onSuccess: onQuerySuccess,
  });

  return children;
}

export function QueryWrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsWrapper>{children}</PostsWrapper>
    </QueryClientProvider>
  );
}
