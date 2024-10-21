import { useEffect, useState } from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { getAllMarkdownPages } from "@lib";
interface BlogEntryProps {
  entryName: string;
}
export function BlogEntry({ entryName }: BlogEntryProps) {
  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    getAllMarkdownPages().then((allMarkdownPages) => {
      setMarkdown(
        allMarkdownPages.filter((markdownPage) => {
          return markdownPage.name == entryName;
        })[0].markdown
      );
    });
  }, []);
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            <>
              <SyntaxHighlighter
                style={dracula}
                PreTag="div"
                language={match[1]}
                showLineNumbers
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            </>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
}
