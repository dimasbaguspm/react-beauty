import React, { ReactNode, forwardRef, HTMLAttributes } from "react";

import { ElAccordionContainer } from "./style";
import { AccordionProvider, useAccordion } from "./use-accordion";


const AccordionContainerInner = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { expanded } = useAccordion();
    return (
      <ElAccordionContainer 
        ref={ref} 
        {...props}
        role="region"
        data-expanded={expanded.toString()}
      />
    );
  }
);

export interface AccordionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  defaultExpanded?: boolean;
}


export const AccordionContainer = forwardRef<
  HTMLDivElement,
  AccordionContainerProps
>(({ children, defaultExpanded = false, ...props }, ref) => {
  return (
    <AccordionProvider defaultExpanded={defaultExpanded}>
      <AccordionContainerInner ref={ref} {...props}>
        {children}
      </AccordionContainerInner>
    </AccordionProvider>
  );
});
