import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';

import { ElTabItem } from './style';
import { useTabs } from './use-tabs';

export interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The value of the tab */
  value: string;
  /** Children elements to render */
  children: ReactNode;
}

export const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ children, value, disabled = false, ...rest }, ref) => {
    const { value: selectedValue, onValueChange, type } = useTabs();
    const isActive = selectedValue === value;

    const handleClick = () => {
      if (!disabled) {
        onValueChange(value);
      }
    };

    return (
      <ElTabItem
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        disabled={disabled}
        data-active={isActive}
        data-type={type}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </ElTabItem>
    );
  },
);
