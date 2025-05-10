import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import {
  ElMenuItemLabel,
  ElMenuItemDescription,
  ElMenuLabelContainer,
} from './style';

export interface MenuItemLabelProps extends HTMLAttributes<HTMLHeadingElement> {
  'data-description'?: string;
  children: ReactNode;
}

export const MenuItemLabel = forwardRef<HTMLHeadingElement, MenuItemLabelProps>(
  ({ 'data-description': description, ...props }, ref) => {
    const isJSXElement =
      props.children &&
      typeof props.children === 'object' &&
      'type' in props.children;

    if (isJSXElement) {
      return <ElMenuLabelContainer>{props.children}</ElMenuLabelContainer>;
    }

    return (
      <ElMenuLabelContainer>
        <ElMenuItemLabel
          {...props}
          ref={ref}
          data-has-description={!!description}
        />
        {description && (
          <ElMenuItemDescription>{description}</ElMenuItemDescription>
        )}
      </ElMenuLabelContainer>
    );
  },
);
