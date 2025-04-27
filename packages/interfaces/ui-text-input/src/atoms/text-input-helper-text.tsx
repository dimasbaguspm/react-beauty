import { forwardRef, HTMLAttributes } from 'react';

import { ElTextInputHelperText } from './style';
import { useTextInput } from './use-text-input';

import type { ReactNode } from 'react';

export interface TextInputHelperTextProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const TextInputHelperText = forwardRef<
  HTMLParagraphElement,
  TextInputHelperTextProps
>((props, ref) => {
  const { getAttributes } = useTextInput();

  return <ElTextInputHelperText ref={ref} {...props} {...getAttributes()} />;
});
