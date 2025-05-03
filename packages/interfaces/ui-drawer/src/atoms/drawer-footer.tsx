import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElDrawerFooter } from './style';

export interface DrawerFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DrawerFooter = forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElDrawerFooter ref={ref} {...rest}>
        {children}
      </ElDrawerFooter>
    );
  },
);
