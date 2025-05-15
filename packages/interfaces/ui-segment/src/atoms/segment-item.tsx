import { forwardRef, ButtonHTMLAttributes, ReactNode, Children } from 'react';

import { ElSegmentItem } from './style';
import { useSegment } from './use-segment';

export interface SegmentItemProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  value: string;
}

export const SegmentItem = forwardRef<HTMLButtonElement, SegmentItemProps>(
  ({ children, value, ...rest }, ref) => {
    const { getItemProps } = useSegment();
    const itemProps = getItemProps(value);

    const isTextChild = Children.toArray(children).every(
      (child) => typeof child === 'string' || typeof child === 'number',
    );
    const isOnlyChild = Children.count(children) === 1 && !isTextChild;

    return (
      <ElSegmentItem
        ref={ref}
        type="button"
        {...itemProps}
        {...rest}
        data-has-square-padding={isOnlyChild}
      >
        {children}
      </ElSegmentItem>
    );
  },
);
