import { BlogMarkdownPage } from "@types";
import { markdownConfiguration } from "./markdownConfiguration";

export async function getAllMarkdownPages(): Promise<BlogMarkdownPage[]> {
  return await Promise.all(
    markdownConfiguration.map(async (config) => {
      const response = await fetch(config.url);

      const markdown = await response.text();
      return {
        name: config.title,
        markdown,
      };
    })
  );
}
