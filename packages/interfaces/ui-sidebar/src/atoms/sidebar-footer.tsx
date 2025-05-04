import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarFooter } from './style';

export interface SidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SidebarFooter = forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElSidebarFooter ref={ref} {...rest}>
        {children}
      </ElSidebarFooter>
    );
  },
);
