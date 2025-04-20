import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElEmptyStateContainer } from "./style";

export interface EmptyStateContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const EmptyStateContainer = forwardRef<
  HTMLDivElement,
  EmptyStateContainerProps
>((props, ref) => <ElEmptyStateContainer ref={ref} {...props} />);
