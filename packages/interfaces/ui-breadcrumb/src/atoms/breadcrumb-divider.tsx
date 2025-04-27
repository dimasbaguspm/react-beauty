import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElBreadcrumbDivider } from './style';

export interface BreadcrumbDividerProps
  extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const BreadcrumbDivider = forwardRef<
  HTMLSpanElement,
  BreadcrumbDividerProps
>((props, ref) => <ElBreadcrumbDivider {...props} ref={ref} />);
