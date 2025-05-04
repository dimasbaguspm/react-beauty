import { Icon } from '@react-beauty/ui-icon';
import { forwardRef, ButtonHTMLAttributes } from 'react';

import { ElSidebarToggleButton } from './style';
import { useSidebar } from './use-sidebar';

export type SidebarToggleButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const SidebarToggleButton = forwardRef<
  HTMLButtonElement,
  SidebarToggleButtonProps
>((props, ref) => {
  const { isExpanded, toggleExpanded } = useSidebar();

  return (
    <ElSidebarToggleButton
      ref={ref}
      onClick={toggleExpanded}
      {...props}
      aria-label={isExpanded ? 'Collapse sidebar' : 'Expand sidebar'}
    >
      <Icon
        name={isExpanded ? 'controlsChevronLeft' : 'controlsChevronRight'}
        size="xs"
      />
    </ElSidebarToggleButton>
  );
});
