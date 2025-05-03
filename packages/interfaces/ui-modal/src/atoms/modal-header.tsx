import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElModalHeader } from './style';

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElModalHeader ref={ref} {...rest}>
        {children}
      </ElModalHeader>
    );
  },
);
