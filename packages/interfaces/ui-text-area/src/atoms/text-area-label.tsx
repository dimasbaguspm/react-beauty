import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTextAreaLabel } from './style';

export interface TextAreaLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}

export const TextAreaLabel = forwardRef<HTMLLabelElement, TextAreaLabelProps>(
  ({ children, ...props }, ref) => {
    return (
      <ElTextAreaLabel ref={ref} {...props}>
        {children}
      </ElTextAreaLabel>
    );
  },
);
