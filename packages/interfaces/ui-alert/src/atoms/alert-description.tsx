import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElAlertDescription } from "./style";

export interface AlertDescriptionProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export const AlertDescription = forwardRef<
  HTMLHeadingElement,
  AlertDescriptionProps
>((props, ref) => {
  return (
    <ElAlertDescription data-testid="alert-description" {...props} ref={ref} />
  );
});
