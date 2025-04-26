import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElMenuItemLabel, ElMenuItemDescription } from './style';

export interface MenuItemLabelProps extends HTMLAttributes<HTMLHeadingElement> {
  'data-description'?: string;
  children: ReactNode;
}

export const MenuItemLabel = forwardRef<HTMLHeadingElement, MenuItemLabelProps>(
  ({ 'data-description': description, ...props }, ref) => (
    <div>
      <ElMenuItemLabel
        {...props}
        ref={ref}
        data-has-description={!!description}
      />
      {description && (
        <ElMenuItemDescription>{description}</ElMenuItemDescription>
      )}
    </div>
  ),
);
