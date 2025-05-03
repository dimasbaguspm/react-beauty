import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElModalFooter } from './style';

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElModalFooter ref={ref} {...rest}>
        {children}
      </ElModalFooter>
    );
  },
);
