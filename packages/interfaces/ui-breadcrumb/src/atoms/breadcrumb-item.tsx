import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElBreadcrumbItem } from './style';

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isActive?: boolean;
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ isActive = false, ...props }, ref) => (
    <ElBreadcrumbItem {...props} ref={ref} data-is-active={isActive} />
  ),
);
