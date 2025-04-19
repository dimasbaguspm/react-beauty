import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElAlertTitle } from "./style";

export interface AlertTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export const AlertTitle = forwardRef<HTMLHeadingElement, AlertTitleProps>(
  (props, ref) => {
    return <ElAlertTitle data-testid="alert-title" {...props} ref={ref} />;
  },
);
