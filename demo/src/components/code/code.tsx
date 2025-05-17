import { FC, useRef, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierSulphurpoolLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { formatCodeString } from './helpers';
import {
  CodeContainer,
  CopyButton,
  LineNumber,
  LineNumbers,
  Pre,
} from './style';

interface CodeProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  showCopyButton?: boolean;
}

export const Code: FC<CodeProps> = ({
  code,
  language = 'plaintext',
  showLineNumbers = false,
  showCopyButton = false,
}) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const formattedCode = formatCodeString(code);

  const handleCopy = () => {
    // Use the browser's clipboard API directly
    navigator.clipboard
      .writeText(formattedCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(console.error);
  };

  const renderLineNumbers = () => {
    if (!showLineNumbers) return null;

    const lines = formattedCode.split('\n');
    return (
      <LineNumbers>
        {lines.map((_, idx) => (
          <LineNumber key={idx}>{idx + 1}</LineNumber>
        ))}
      </LineNumbers>
    );
  };

  return (
    <CodeContainer>
      {renderLineNumbers()}
      <Pre ref={preRef}>
        {/* @ts-expect-error - old code style */}
        <SyntaxHighlighter
          language={language}
          style={atelierSulphurpoolLight}
          showLineNumbers={false}
          customStyle={{ background: 'transparent', margin: 0, padding: 0 }}
        >
          {formattedCode}
        </SyntaxHighlighter>
      </Pre>
      {showCopyButton && (
        <CopyButton onClick={handleCopy}>
          {isCopied ? 'Copied!' : 'Copy'}
        </CopyButton>
      )}
    </CodeContainer>
  );
};
