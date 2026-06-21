import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {
  content: string;
};

const RedMarkdown: React.FC<Props> = ({ content }) => {
  let processed = content;

  // ++文字++ => 底線
  processed = processed.replace(
    /\+\+(.*?)\+\+/g,
    "<u>$1</u>"
  );

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        // 避免 ReactMarkdown 自動產生 <p>
        p: ({ children }) => <span>{children}</span>,

        // **文字**
        strong: ({ children }) => (
          <span
            style={{
              color: "#cc7777", // 淡紅色
              fontWeight: 600,
            }}
          >
            {children}
          </span>
        ),

        // ++文字++
        u: ({ children }) => (
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {children}
          </span>
        ),
      }}
    >
      {processed.replace(/\n/g, "  \n")}
    </ReactMarkdown>
  );
};

export default RedMarkdown;