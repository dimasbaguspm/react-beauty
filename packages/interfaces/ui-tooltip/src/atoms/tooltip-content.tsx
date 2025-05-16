import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTooltipContent } from './style';
import { useTooltip } from './tooltip-context';

export interface TooltipContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      children,

      ...props
    },
    ref,
  ) => {
    const { visible, tooltipId, placement, shadow, pointer } = useTooltip();

    if (!visible) return null;

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
