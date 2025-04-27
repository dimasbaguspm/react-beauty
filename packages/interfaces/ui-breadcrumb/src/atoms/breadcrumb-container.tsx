import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElBreadcrumbContainer } from './style';

export interface BreadcrumbContainerProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const BreadcrumbContainer = forwardRef<
  HTMLElement,
  BreadcrumbContainerProps
>((props, ref) => <ElBreadcrumbContainer {...props} ref={ref} />);
