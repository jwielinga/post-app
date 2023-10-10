import React, { useContext } from "react";
import { PostActionsContext } from "@Post-app/components/Providers/PostActions";

export const usePostActionContext = () => {
  const context = useContext(PostActionsContext);
  if (!context) {
    throw new Error(
      "usePostActionContext must be used within a PostActionsProvider"
    );
  }
  return context;
};
