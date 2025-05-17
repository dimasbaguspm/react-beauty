import { styled } from '@linaria/react';
import { Button } from '@react-beauty/interfaces';

export const CodeContainer = styled.div`
  position: relative;
  margin: var(--space-2) 0;
  border-radius: var(--border-radius-md);
  background-color: var(--colors-main-gohan);
  overflow: hidden;
  border: 1px solid var(--colors-main-beerus);
`;

export const Pre = styled.pre`
  margin: 0;
  padding: var(--space-4);
  overflow-x: auto;
  font-family: monospace;
  font-size: var(--font-size-sm);
  line-height: var(--font-line-height-md);
  padding-left: var(--space-10);
`;

export const CodeElement = styled.code`
  font-family: monospace;
  white-space: pre;
  color: var(--colors-main-bulma);
`;

export const LineNumbers = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: var(--space-4) 0;
  color: var(--colors-main-trunks);
  border-right: 1px solid var(--colors-main-beerus);
  text-align: right;
  user-select: none;
`;

export const LineNumber = styled.div`
  padding: 0 var(--space-3);
  font-family: monospace;
  font-size: var(--font-size-sm);
  line-height: var(--font-line-height-md);
`;

export const CopyButton = styled(Button)`
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
`;
