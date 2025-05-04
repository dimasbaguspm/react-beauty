import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarSectionTitle } from './style';

export interface SidebarSectionTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const SidebarSectionTitle = forwardRef<
  HTMLHeadingElement,
  SidebarSectionTitleProps
>(({ children, ...rest }, ref) => {
  return (
    <ElSidebarSectionTitle ref={ref} {...rest}>
      {children}
    </ElSidebarSectionTitle>
  );
});
