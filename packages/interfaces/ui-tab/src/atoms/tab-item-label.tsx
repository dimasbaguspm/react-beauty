import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTabItemLabel } from './style';

export interface TabItemLabelProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const TabItemLabel = forwardRef<HTMLSpanElement, TabItemLabelProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElTabItemLabel ref={ref} {...rest}>
        {children}
      </ElTabItemLabel>
    );
  },
);
