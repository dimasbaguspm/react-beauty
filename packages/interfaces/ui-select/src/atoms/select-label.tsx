import { forwardRef, LabelHTMLAttributes, ReactNode } from 'react';

import { ElSelectLabel } from './style';
import { useSelect } from './use-select';

export interface SelectLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export const SelectLabel = forwardRef<HTMLLabelElement, SelectLabelProps>(
  ({ children, ...rest }, ref) => {
    const { selectId, isDisabled } = useSelect();

    return (
      <ElSelectLabel
        ref={ref}
        htmlFor={selectId}
        {...rest}
        aria-disabled={isDisabled}
      >
        {children}
      </ElSelectLabel>
    );
  },
);
