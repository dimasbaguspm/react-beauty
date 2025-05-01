import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElRadioContainer } from './style';
import { RadioProvider } from './use-radio';

export interface RadioContainerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  hasError?: boolean;
  isDisabled?: boolean;
  isChecked?: boolean;
  value: string;
  children: ReactNode;
}

export const RadioContainer = forwardRef<HTMLDivElement, RadioContainerProps>(
  ({ hasError = false, isDisabled = false, children, value, ...rest }, ref) => {
    return (
      <RadioProvider hasError={hasError} isDisabled={isDisabled} value={value}>
        <ElRadioContainer ref={ref} {...rest}>
          {children}
        </ElRadioContainer>
      </RadioProvider>
    );
  },
);
