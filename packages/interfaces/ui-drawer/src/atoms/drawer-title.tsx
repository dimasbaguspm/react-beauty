import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElDrawerTitle } from './style';

export interface DrawerTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const DrawerTitle = forwardRef<HTMLHeadingElement, DrawerTitleProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElDrawerTitle ref={ref} {...rest}>
        {children}
      </ElDrawerTitle>
    );
  },
);
