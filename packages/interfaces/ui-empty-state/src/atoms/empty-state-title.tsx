import { forwardRef, HTMLAttributes } from "react";

import { ElEmptyStateTitle } from "./style";

export interface EmptyStateTitleProps
  extends HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

export const EmptyStateTitle = forwardRef<HTMLDivElement, EmptyStateTitleProps>(
  (props, ref) => <ElEmptyStateTitle {...props} ref={ref} />,
);
