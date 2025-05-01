import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElCheckboxLabel } from './style';
import { useCheckbox } from './use-checkbox';

export interface CheckboxLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}

export const CheckboxLabel = forwardRef<HTMLLabelElement, CheckboxLabelProps>(
  ({ children, htmlFor, ...props }, ref) => {
    const { checkboxId, getAttributes } = useCheckbox();

    return (
      <ElCheckboxLabel
        ref={ref}
        htmlFor={htmlFor || checkboxId}
        {...props}
        {...getAttributes()}
      >
        {children}
      </ElCheckboxLabel>
    );
  },
);
