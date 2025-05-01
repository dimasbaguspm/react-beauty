import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElCheckboxLabel } from './style';
import { useCheckbox } from './use-checkbox';

export interface CheckboxInputLabelProps
  extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor?: string;
}

export const CheckboxInputLabel = forwardRef<
  HTMLLabelElement,
  CheckboxInputLabelProps
>(({ children, htmlFor, ...props }, ref) => {
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
});
