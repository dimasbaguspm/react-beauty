import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTabItemTrail } from './style';

export interface TabItemTrailProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const TabItemTrail = forwardRef<HTMLSpanElement, TabItemTrailProps>(
  ({ children, ...rest }, ref) => {
    return (
      <ElTabItemTrail ref={ref} {...rest}>
        {children}
      </ElTabItemTrail>
    );
  },
);
