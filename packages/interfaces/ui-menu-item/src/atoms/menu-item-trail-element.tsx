import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElMenuItemTrailElement } from "./style";

export interface MenuItemTrailElementProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MenuItemTrailElement = forwardRef<
  HTMLDivElement,
  MenuItemTrailElementProps
>((props, ref) => <ElMenuItemTrailElement {...props} ref={ref} />);
