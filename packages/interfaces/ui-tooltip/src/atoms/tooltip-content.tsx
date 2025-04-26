import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTooltipContent } from './style';
import { useTooltip } from './tooltip-context';

export type TooltipPlacement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'center-top'
  | 'center-bottom';

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  placement?: TooltipPlacement;
  shadow?: boolean;
  pointer?: boolean;
  visible?: boolean;
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      children,
      placement = 'top',
      shadow = true,
      pointer = true,
      visible: visibleProp,
      ...props
    },
    ref,
  ) => {
    const { visible: contextVisible, tooltipId } = useTooltip();

    // Use prop value if provided, otherwise use context value
    const isVisible = visibleProp !== undefined ? visibleProp : contextVisible;

    if (!isVisible) return null;

    return (
      <ElTooltipContent
        ref={ref}
        id={tooltipId}
        data-placement={placement}
        data-shadow={shadow ? 'true' : 'false'}
        data-pointer={pointer ? 'true' : 'false'}
        role="tooltip"
        {...props}
      >
        {children}
      </ElTooltipContent>
    );
  },
);
