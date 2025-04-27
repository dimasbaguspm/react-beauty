import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import {
  BreadcrumbContainer,
  BreadcrumbDivider,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from './atoms';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Breadcrumb = Object.assign(
  forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => (
    <BreadcrumbContainer {...props} ref={ref}>
      <BreadcrumbList>{props.children}</BreadcrumbList>
    </BreadcrumbContainer>
  )),
  {
    Item: BreadcrumbItem,
    Link: BreadcrumbLink,
    Divider: BreadcrumbDivider,
  },
);
