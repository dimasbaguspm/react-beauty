import { TooltipContent, TooltipTrigger } from './atoms';
import { TooltipContainer } from './atoms/tooltip-container';

export type { TooltipProps } from './atoms/tooltip-container';
export type { TooltipPlacement } from './atoms/tooltip-content';
export type { TooltipContentProps } from './atoms/tooltip-content';
export type { TooltipTriggerProps } from './atoms/tooltip-trigger';

// Create a compound component by combining TooltipContainer with subcomponents
const CompoundTooltip = {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
};

// The final Tooltip component with proper typing
export const Tooltip = Object.assign(TooltipContainer, CompoundTooltip);
