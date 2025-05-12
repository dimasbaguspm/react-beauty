import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElText } from './style';

export type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'small';

export type TextProps = HTMLAttributes<HTMLDivElement> & {
  as?: TextElement;
  children: ReactNode;
};

export const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ as = 'p', children, ...props }, ref) => {
    return (
      <ElText ref={ref} data-element={as} {...props}>
        {children}
      </ElText>
    );
  },
);

Text.displayName = 'Text';

Text.displayName = 'Text';
