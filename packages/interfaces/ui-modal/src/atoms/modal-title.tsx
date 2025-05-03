import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElModalTitle } from './style';

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElModalTitle ref={ref} {...rest}>
        {children}
      </ElModalTitle>
    );
  },
);
