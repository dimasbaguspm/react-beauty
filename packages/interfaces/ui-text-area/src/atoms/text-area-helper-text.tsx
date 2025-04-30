import { forwardRef, HTMLAttributes } from 'react';

import { ElTextAreaHelperText } from './style';
import { useTextArea } from './use-text-area';

import type { ReactNode } from 'react';

export interface TextAreaHelperTextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const TextAreaHelperText = forwardRef<
  HTMLParagraphElement,
  TextAreaHelperTextProps
>((props, ref) => {
  const { getAttributes } = useTextArea();

  return <ElTextAreaHelperText ref={ref} {...props} {...getAttributes()} />;
});
