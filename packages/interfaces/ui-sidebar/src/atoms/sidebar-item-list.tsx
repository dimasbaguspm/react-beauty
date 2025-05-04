import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSidebarItemsList } from './style';

export interface SidebarItemListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

export const SidebarItemList = forwardRef<
  HTMLUListElement,
  SidebarItemListProps
>(({ children, ...rest }, ref) => {
  return (
    <ElSidebarItemsList ref={ref} role="list" {...rest}>
      {children}
    </ElSidebarItemsList>
  );
});
