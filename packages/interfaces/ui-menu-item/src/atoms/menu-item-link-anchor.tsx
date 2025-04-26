import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';

import { ElMenuItemLinkAnchor } from './style';

export interface MenuItemLinkAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  onClick?: never;
}

export const MenuItemLinkAnchor = forwardRef<
  HTMLAnchorElement,
  MenuItemLinkAnchorProps
>((props, ref) => <ElMenuItemLinkAnchor {...props} ref={ref} />);
