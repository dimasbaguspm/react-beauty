import { Icon } from "@react-beauty/ui-icon";
import React, { forwardRef, HTMLAttributes } from "react";

import { ElAccordionTrailElement } from "./style";
import { useAccordion } from "./use-accordion";

export type AccordionCloseProps = HTMLAttributes<HTMLDivElement>;

export const AccordionClose = forwardRef<HTMLDivElement, AccordionCloseProps>(
  (props, ref) => {
    const { expanded } = useAccordion();
    
    return (
      <ElAccordionTrailElement ref={ref} data-expanded={expanded} {...props}>
        <Icon name="controlsChevronDown" size="md" />
      </ElAccordionTrailElement>
    );
  }
);

