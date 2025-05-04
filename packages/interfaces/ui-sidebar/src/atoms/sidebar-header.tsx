import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarHeader } from './style';
import { useSidebar } from './use-sidebar';

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ children, ...rest }, ref) => {
    const { isExpanded } = useSidebar();
    return (
      <ElSidebarHeader ref={ref} {...rest} data-expanded={isExpanded}>
        {children}
      </ElSidebarHeader>
    );
  },
);
