import { forwardRef, LiHTMLAttributes } from 'react';

import { MenuItemLinkAnchor } from './menu-item-link-anchor';
import { MenuItemLinkButton } from './menu-item-link-button';
import { ElMenuItemContainer } from './style';

import type { MenuItemLinkAnchorProps } from './menu-item-link-anchor';
import type { MenuItemLinkButtonProps } from './menu-item-link-button';

const isButton = (
  props: Pick<MenuItemContainerProps, 'onClick' | 'href'>,
): props is MenuItemLinkButtonProps => {
  return 'onClick' in props && props?.onClick !== undefined;
};

const isAnchor = (
  props: Pick<MenuItemContainerProps, 'onClick' | 'href'>,
): props is MenuItemLinkAnchorProps => {
  return 'href' in props && props?.href !== undefined;
};

export interface MenuItemContainerProps
  extends LiHTMLAttributes<HTMLLIElement> {
  href?: MenuItemLinkAnchorProps['href'];
  onClick?: MenuItemLinkButtonProps['onClick'];
}

export const MenuItemContainer = forwardRef<
  HTMLLIElement,
  MenuItemContainerProps
>((props, ref) => (
  <ElMenuItemContainer ref={ref}>
    {isButton(props) && <MenuItemLinkButton {...props} />}
    {isAnchor(props) && <MenuItemLinkAnchor {...props} />}
    {!isButton(props) && !isAnchor(props) && props.children}
  </ElMenuItemContainer>
));
