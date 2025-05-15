import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSegmentContainer, ElSegmentList } from './style';
import { SegmentProvider, SegmentValue } from './use-segment';

export interface SegmentContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  value: SegmentValue;
  onValueChange: (value: SegmentValue) => void;
}

export const SegmentContainer = forwardRef<
  HTMLDivElement,
  SegmentContainerProps
>(({ children, value, onValueChange, ...rest }, ref) => {
  return (
    <SegmentProvider value={value} onValueChange={onValueChange}>
      <ElSegmentContainer ref={ref} role="tablist" {...rest}>
        <ElSegmentList>{children}</ElSegmentList>
      </ElSegmentContainer>
    </SegmentProvider>
  );
});
