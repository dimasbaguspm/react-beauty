import { MenuItem } from '@react-beauty/ui-menu-item';
import { Tooltip } from '@react-beauty/ui-tooltip';
import {
  forwardRef,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from 'react';

import { ElSidebarItemContainer } from './style';
import { useSidebar } from './use-sidebar';

type CommonProps = {
  icon?: ReactNode;
  active?: boolean;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type SidebarItemProps = ButtonProps | AnchorProps;

export const SidebarItem = forwardRef<HTMLLIElement, SidebarItemProps>(
  ({ icon, active = false, children, ...rest }, ref) => {
    const { isExpanded } = useSidebar();

    const isButton = 'onClick' in rest;
    const isAnchor = 'href' in rest;

    // Only pass specific props to MenuItem and handle everything else at the DOM level
    const menuItemProps = {
      ref,
      href: isAnchor ? rest.href : undefined,
      'aria-current': active
        ? isAnchor
          ? ('page' as const)
          : ('true' as const)
        : undefined,
      // @ts-expect-error -- already checked if isButton or isAnchor
      onClick: isButton ? () => rest?.onClick?.() : undefined,
      role: 'listitem', // Explicitly set role for accessibility
      'data-active': active,
      'data-expanded': isExpanded,
      // @ts-expect-error -- rest is not a valid prop for MenuItem
      'data-testid': rest?.['data-testid'],
    };

    // When sidebar is collapsed, wrap with Tooltip for better UX
    if (!isExpanded) {
      return (
        <ElSidebarItemContainer {...menuItemProps}>
          <Tooltip trigger="hover">
            <Tooltip.Trigger>
              {icon && <MenuItem.LeadElement>{icon}</MenuItem.LeadElement>}
            </Tooltip.Trigger>
            <MenuItem.Label data-visible={isExpanded}>
              {children}
            </MenuItem.Label>
            <Tooltip.Content placement="right">{children}</Tooltip.Content>
          </Tooltip>
        </ElSidebarItemContainer>
      );
    }

    // Regular rendering when sidebar is expanded
    return (
      <ElSidebarItemContainer {...menuItemProps}>
        {icon && <MenuItem.LeadElement>{icon}</MenuItem.LeadElement>}
        <MenuItem.Label data-visible={isExpanded}>{children}</MenuItem.Label>
      </ElSidebarItemContainer>
    );
  },
);
