import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElBreadcrumbList } from './style';

export interface BreadcrumbListProps extends HTMLAttributes<HTMLOListElement> {
  children: ReactNode;
}

export const BreadcrumbList = forwardRef<HTMLOListElement, BreadcrumbListProps>(
  (props, ref) => <ElBreadcrumbList {...props} ref={ref} />,
);
