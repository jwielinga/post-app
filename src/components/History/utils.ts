import { Interaction } from "@Post-app/types";

export const generateText = (interaction: Interaction) =>
  `Moved post ${interaction.postId} from index ${interaction.oldPosition} to index ${interaction.newPosition}`;
