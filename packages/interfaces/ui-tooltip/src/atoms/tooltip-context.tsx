import { createContext, useContext } from 'react';

export type TooltipTriggerType = 'hover' | 'click' | 'manual';

export type TooltipPlacement =
  | 'top-center'
  | 'top-right'
  | 'top-left'
  | 'right-top'
  | 'right-center'
  | 'right-bottom'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left'
  | 'left-top'
  | 'left-center'
  | 'left-bottom';

export interface TooltipContextValue {
  visible: boolean;
  setVisible: (value: boolean) => void;
  trigger: TooltipTriggerType;
  tooltipId: string;
  placement?: TooltipPlacement;
  shadow?: boolean;
  pointer?: boolean;
}

export const TooltipContext = createContext<TooltipContextValue | undefined>(
  undefined,
);

export function useTooltip() {
  const context = useContext(TooltipContext);

  if (context === undefined) {
    throw new Error('useTooltip must be used within a TooltipContainer');
  }

  return context;
}
