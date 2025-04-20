import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import { ElMenuItemLinkButton } from "./style";

export interface MenuItemLinkButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: VoidFunction;
  href?: never;
}

export const MenuItemLinkButton = forwardRef<
  HTMLButtonElement,
  MenuItemLinkButtonProps
>((props, ref) => <ElMenuItemLinkButton {...props} ref={ref} />);
