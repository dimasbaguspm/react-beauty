import { createContext, useContext } from 'react';

export type TooltipTriggerType = 'hover' | 'click' | 'manual';

export interface TooltipContextValue {
  visible: boolean;
  setVisible: (value: boolean) => void;
  trigger: TooltipTriggerType;
  tooltipId: string;
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
