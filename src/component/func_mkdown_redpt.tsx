import React from 'react';
import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
  highlights?: string[];
};

const RedMarkdown: React.FC<Props> = ({ content, highlights }) => {
  let processed = content;

  if (highlights) {
    highlights.forEach(word => {
      const regex = new RegExp(word, "g");
      processed = processed.replace(regex, `**${word}**`);
    });
  }

  return (
    <ReactMarkdown
      components={{
        strong: ({ children }) => (
          <span style={{ color: 'red' }}>{children}</span>
        ),
        p: ({ children }) => <span>{children}</span>,
      }}
    >
      {processed.replace(/\n/g, '  \n')}
    </ReactMarkdown>
  );
};

export default RedMarkdown;