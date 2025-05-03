import { ReactNode, forwardRef, HTMLAttributes } from 'react';

import { ElBottomSheetBody } from './style';

export interface BottomSheetBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const BottomSheetBody = forwardRef<HTMLDivElement, BottomSheetBodyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElBottomSheetBody ref={ref} {...rest}>
        {children}
      </ElBottomSheetBody>
    );
  },
);
