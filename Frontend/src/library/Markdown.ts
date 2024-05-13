import { markdownConfiguration } from "@lib";
export async function getAllMarkdownPagesRaw() {
  const promises = markdownConfiguration.map(
    async (singleMarkdownConfiguration) => {
      const response = await fetch(singleMarkdownConfiguration.url);
      return response.text();
    }
  );

  const rawMarkdownPages = await Promise.all(promises);
  return rawMarkdownPages;
}
