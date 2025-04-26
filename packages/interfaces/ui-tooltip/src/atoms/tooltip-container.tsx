import React, { forwardRef, useState, ReactNode, useId } from 'react';

import { ElTooltipContainer } from './style';
import { TooltipContext, TooltipTriggerType } from './tooltip-context';

// Use Omit to avoid conflict with HTMLAttributes content property
export type TooltipProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'content'
> & {
  children: ReactNode;
  defaultVisible?: boolean;
  trigger?: TooltipTriggerType;
};

export const TooltipContainer = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, defaultVisible = false, trigger = 'hover', ...props }, ref) => {
    const [visible, setVisible] = useState(defaultVisible);
    const tooltipId = useId();

    // Creating the context value to be provided to children
    const contextValue = {
      visible,
      setVisible,
      trigger,
      tooltipId,
    };

    return (
      <TooltipContext.Provider value={contextValue}>
        <ElTooltipContainer ref={ref} {...props}>
          {children}
        </ElTooltipContainer>
      </TooltipContext.Provider>
    );
  },
);
