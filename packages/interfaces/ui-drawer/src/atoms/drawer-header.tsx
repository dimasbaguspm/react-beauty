import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElDrawerHeader } from './style';

export interface DrawerHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DrawerHeader = forwardRef<HTMLDivElement, DrawerHeaderProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElDrawerHeader ref={ref} {...rest}>
        {children}
      </ElDrawerHeader>
    );
  },
);
