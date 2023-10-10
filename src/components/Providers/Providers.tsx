"use client";

import React from "react";

import { QueryProviders } from "./QueryClient";
import { PostActionsProvider } from "./PostActions";
import type { ProvidersProps } from "./types";

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryProviders>
      <PostActionsProvider>{children}</PostActionsProvider>
    </QueryProviders>
  );
}
