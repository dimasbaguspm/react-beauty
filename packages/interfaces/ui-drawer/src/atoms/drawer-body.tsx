import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElDrawerBody } from './style';

export interface DrawerBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const DrawerBody = forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElDrawerBody ref={ref} {...rest}>
        {children}
      </ElDrawerBody>
    );
  },
);
