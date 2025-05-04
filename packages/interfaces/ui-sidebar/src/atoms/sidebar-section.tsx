import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarSection } from './style';

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SidebarSection = forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElSidebarSection ref={ref} {...rest}>
        {children}
      </ElSidebarSection>
    );
  },
);
