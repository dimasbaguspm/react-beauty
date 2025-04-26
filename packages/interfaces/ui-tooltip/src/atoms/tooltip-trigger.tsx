import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElTooltipTrigger } from './style';
import { useTooltip } from './tooltip-context';

export interface TooltipTriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TooltipTrigger = forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ children, ...props }, ref) => {
    const { visible, setVisible, trigger, tooltipId } = useTooltip();

    // Create event handlers based on the trigger type
    const getTriggerEvents = () => {
      if (trigger === 'manual') return {};

      if (trigger === 'hover') {
        return {
          onMouseEnter: () => setVisible(true),
          onMouseLeave: () => setVisible(false),
          onFocus: () => setVisible(true),
          onBlur: () => setVisible(false),
        };
      }

      if (trigger === 'click') {
        return {
          onClick: () => setVisible(!visible),
        };
      }

      return {};
    };

    return (
      <ElTooltipTrigger
        ref={ref}
        aria-describedby={visible ? tooltipId : undefined}
        {...getTriggerEvents()}
        {...props}
      >
        {children}
      </ElTooltipTrigger>
    );
  },
);
