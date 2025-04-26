import { forwardRef, HTMLAttributes } from 'react';

import { ElEmptyStateDescription } from './style';

export interface EmptyStateDescriptionProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export const EmptyStateDescription = forwardRef<
  HTMLDivElement,
  EmptyStateDescriptionProps
>((props, ref) => <ElEmptyStateDescription {...props} ref={ref} />);
