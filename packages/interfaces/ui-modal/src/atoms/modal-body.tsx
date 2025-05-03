import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElModalBody } from './style';

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElModalBody ref={ref} {...rest}>
        {children}
      </ElModalBody>
    );
  },
);
