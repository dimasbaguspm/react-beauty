import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElBreadcrumbLink } from './style';

export interface BreadcrumbLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
}

export const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>((props, ref) => <ElBreadcrumbLink {...props} ref={ref} />);
