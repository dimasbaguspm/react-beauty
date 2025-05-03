import { ReactNode, forwardRef, HTMLAttributes } from 'react';

import { ElBottomSheetFooter } from './style';

export interface BottomSheetFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const BottomSheetFooter = forwardRef<
  HTMLDivElement,
  BottomSheetFooterProps
>(({ children, ...rest }, ref) => {
  return (
    <ElBottomSheetFooter ref={ref} {...rest}>
      {children}
    </ElBottomSheetFooter>
  );
});
