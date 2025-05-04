import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarBody } from './style';

export interface SidebarBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const SidebarBody = forwardRef<HTMLDivElement, SidebarBodyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElSidebarBody ref={ref} {...rest}>
        {children}
      </ElSidebarBody>
    );
  },
);
