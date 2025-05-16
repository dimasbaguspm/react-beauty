import React, { forwardRef, useState, ReactNode, useId } from 'react';

import { ElTooltipContainer } from './style';
import {
  TooltipContext,
  TooltipContextValue,
  TooltipPlacement,
  TooltipTriggerType,
} from './tooltip-context';

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  children: ReactNode;
  defaultVisible?: boolean;
  trigger?: TooltipTriggerType;
  placement?: TooltipPlacement;
  shadow?: boolean;
  pointer?: boolean;
}

export const TooltipContainer = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      children,
      defaultVisible = false,
      trigger = 'hover',
      placement = 'top-center',
      shadow = true,
      pointer = true,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(defaultVisible);
    const tooltipId = useId();

    const contextValue = {
      visible,
      setVisible,
      trigger,
      tooltipId,
      placement,
      shadow,
      pointer,
    } satisfies TooltipContextValue;

    return (
      <TooltipContext.Provider value={contextValue}>
        <ElTooltipContainer ref={ref} {...props}>
          {children}
        </ElTooltipContainer>
      </TooltipContext.Provider>
    );
  },
);
