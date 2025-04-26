import React, { HTMLAttributes, forwardRef } from "react";

import { ElAccordionTitle } from "./style";

export type AccordionTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const AccordionTitle = forwardRef<HTMLHeadingElement, AccordionTitleProps>(
  ({ children, ...props }, ref) => {
    return (
      <ElAccordionTitle ref={ref} {...props}>
        {children}
      </ElAccordionTitle>
    );
  }
);
