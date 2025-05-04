import { forwardRef, HTMLAttributes } from 'react';

import { ElSidebarDivider } from './style';

export type SidebarDividerProps = HTMLAttributes<HTMLDivElement>;

export const SidebarDivider = forwardRef<HTMLDivElement, SidebarDividerProps>(
  (props, ref) => {
    return <ElSidebarDivider ref={ref} role="separator" {...props} />;
  },
);
