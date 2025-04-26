import React, { HTMLAttributes, forwardRef, KeyboardEvent } from "react";

import { ElAccordionHeader } from "./style";
import { useAccordion } from "./use-accordion";

export type AccordionHeaderProps = HTMLAttributes<HTMLDivElement> 

export const AccordionHeader = forwardRef<HTMLDivElement, AccordionHeaderProps>(
  ({ children, ...props }, ref) => {
    const { expanded, setExpanded, contentId } = useAccordion();


    const handleClick = () => {
      setExpanded(!expanded);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setExpanded(!expanded);
      }
    };

    return (
      <ElAccordionHeader
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={contentId}
        {...props}
      >
        {children}
      </ElAccordionHeader>
    );
  }
);
