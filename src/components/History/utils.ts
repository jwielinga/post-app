import { Interaction } from "@Post-app/types";

export const generateText = (interaction: Interaction) =>
  `Moved post ${interaction.post.title} from index ${
    interaction.oldPosition + 1
  } to index ${interaction.newPosition + 1}`;
