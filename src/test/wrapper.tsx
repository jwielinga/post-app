import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { usePostsQuery } from "@Post-app/hooks";

const queryClient = new QueryClient({
  defaultOptions: {},
});

function PostsWrapper({ children }: { children: ReactNode }) {
  usePostsQuery();

  return children;
}

export function QueryWrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsWrapper>{children}</PostsWrapper>
    </QueryClientProvider>
  );
}
