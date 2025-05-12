import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTabItemLead } from './style';

export interface TabItemLeadProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const TabItemLead = forwardRef<HTMLSpanElement, TabItemLeadProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElTabItemLead ref={ref} {...rest}>
        {children}
      </ElTabItemLead>
    );
  },
);
