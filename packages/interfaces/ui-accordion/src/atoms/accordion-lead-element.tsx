import React, { HTMLAttributes, forwardRef } from "react";

import { ElAccordionLeadElement } from "./style";

export type AccordionLeadElementProps = HTMLAttributes<HTMLDivElement>;

export const AccordionLeadElement = forwardRef<HTMLDivElement, AccordionLeadElementProps>(
  ({ children, ...props }, ref) => {
    return (
      <ElAccordionLeadElement ref={ref} {...props}>
        {children}
      </ElAccordionLeadElement>
    );
  }
);
