import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElAlertIcon } from "./style";

export interface AlertIconProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const AlertIcon = forwardRef<HTMLDivElement, AlertIconProps>(
  (props, ref) => {
    return <ElAlertIcon data-testid="alert-icon" {...props} ref={ref} />;
  },
);
