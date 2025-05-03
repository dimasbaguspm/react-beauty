import { ReactNode, forwardRef, HTMLAttributes } from 'react';

import { ElBottomSheetHeader } from './style';

export interface BottomSheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const BottomSheetHeader = forwardRef<
  HTMLDivElement,
  BottomSheetHeaderProps
>((props, ref) => {
  const { children, ...rest } = props;

  return (
    <ElBottomSheetHeader ref={ref} {...rest}>
      {children}
    </ElBottomSheetHeader>
  );
});
