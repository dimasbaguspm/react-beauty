import { forwardRef, HTMLAttributes, ReactNode } from "react";

import { ElMenuItemLeadElement } from "./style";

export interface MenuItemLeadElementProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const MenuItemLeadElement = forwardRef<
  HTMLDivElement,
  MenuItemLeadElementProps
>((props, ref) => <ElMenuItemLeadElement {...props} ref={ref} />);
