import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "./App.css";
import { useEffect, useState } from "react";
import rehypeRaw from "rehype-raw";

function App() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch("./test.md").then((response) => {
      response.text().then((responseText) => {
        setMarkdown(responseText);
      });
    });
  }, [markdown]);
  return (
    <>
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
    </>
  );
}

export default App;