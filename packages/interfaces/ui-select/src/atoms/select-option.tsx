import { forwardRef, OptionHTMLAttributes, ReactNode } from 'react';

import { ElSelectOption } from './style';

export interface SelectOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: ReactNode;
}

export const SelectOption = forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ value, children, disabled, ...rest }, ref) => {
    return (
      <ElSelectOption ref={ref} value={value} disabled={disabled} {...rest}>
        {children}
      </ElSelectOption>
    );
  },
);
