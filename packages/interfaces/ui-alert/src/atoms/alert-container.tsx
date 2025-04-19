import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElAlertContainer } from "../style";
import { AlertIntent, AlertType } from "../type";

export interface AlertContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  type?: AlertType;
  intent?: AlertIntent;
}

export const AlertContainer = forwardRef<HTMLDivElement, AlertContainerProps>(
  ({ type, intent, ...props }, ref) => {
    return (
      <ElAlertContainer
        {...props}
        data-type={type}
        data-intent={intent}
        role="alert"
        ref={ref}
      />
    );
  },
);
