import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElBottomSheetTitle } from './style';

export interface BottomSheetTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const BottomSheetTitle = forwardRef<
  HTMLHeadingElement,
  BottomSheetTitleProps
>(({ children, ...rest }, ref) => {
  return (
    <ElBottomSheetTitle ref={ref} {...rest}>
      {children}
    </ElBottomSheetTitle>
  );
});
