import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElCheckboxContainer } from './style';
import { CheckboxProvider } from './use-checkbox';

export interface CheckboxContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  hasError?: boolean;
  isDisabled?: boolean;
  value: string;
  children: ReactNode;
}

export const CheckboxContainer = forwardRef<
  HTMLDivElement,
  CheckboxContainerProps
>(({ hasError = false, isDisabled = false, children, value, ...rest }, ref) => {
  return (
    <CheckboxProvider hasError={hasError} isDisabled={isDisabled} value={value}>
      <ElCheckboxContainer ref={ref} {...rest}>
        {children}
      </ElCheckboxContainer>
    </CheckboxProvider>
  );
});
