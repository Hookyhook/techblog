import { useEffect, useState } from "react";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import { getAllMarkdownPagesRaw } from "@lib";

export function BlogEntry() {
  const [markdown, setMarkdown] = useState<string[]>([]);

  useEffect(() => {
    getAllMarkdownPagesRaw().then((rawMarkdown) => {
      setMarkdown(rawMarkdown);
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
      {markdown[0]}
    </Markdown>
  );
}
