import { INTERACTIONS } from "@Post-app/mocks";
import { generateText } from "../utils";

it("it should test if the text generated is correct", () => {
  const text = generateText(INTERACTIONS[0]);
  expect(text).toEqual("Moved post 1 from index 0 to index 1");
});
