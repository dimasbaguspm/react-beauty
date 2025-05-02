import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElSelectHelperText } from './style';
import { useSelect } from './use-select';

export interface SelectHelperTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export const SelectHelperText = forwardRef<
  HTMLSpanElement,
  SelectHelperTextProps
>(({ children, ...rest }, ref) => {
  const { hasError, selectId } = useSelect();

  return (
    <ElSelectHelperText
      ref={ref}
      data-error={hasError}
      id={`${selectId}-helper-text`}
      {...rest}
    >
      {children}
    </ElSelectHelperText>
  );
});
