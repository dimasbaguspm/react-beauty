import React, { HTMLAttributes, forwardRef } from "react";

import { ElAccordionContent } from "./style";
import { useAccordion } from "./use-accordion";

export type AccordionContentProps = HTMLAttributes<HTMLDivElement> 

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, ...props }, ref) => {
    const { expanded, contentId } = useAccordion();
    
    return (
      <ElAccordionContent 
        ref={ref}
        id={contentId}
        data-expanded={expanded.toString()}
        aria-hidden={!expanded}
        {...props}
      >
        {children}
      </ElAccordionContent>
    );
  }
);
