import { TooltipContent, TooltipTrigger, TooltipContainer } from './atoms';

interface TooltipCompositionModel {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
}

const CompoundTooltip = {
  Trigger: TooltipTrigger,
  Content: TooltipContent,
} satisfies TooltipCompositionModel;

export const Tooltip = Object.assign(TooltipContainer, CompoundTooltip);
