import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTabsList } from './style';
import { useTabs } from './use-tabs';

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Children elements to render */
  children: ReactNode;
}

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, ...rest }, ref) => {
    const { type } = useTabs();
    return (
      <ElTabsList ref={ref} data-type={type} {...rest}>
        {children}
      </ElTabsList>
    );
  },
);
