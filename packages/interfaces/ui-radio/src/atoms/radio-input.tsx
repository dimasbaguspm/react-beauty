import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElRadioContainer } from './style';
import { RadioProvider } from './use-radio';

export interface RadioInputProps extends HTMLAttributes<HTMLDivElement> {
  hasError?: boolean;
  isDisabled?: boolean;
  value: string;
  children: ReactNode;
}

export const RadioInput = forwardRef<HTMLDivElement, RadioInputProps>(
  ({ hasError = false, isDisabled = false, value, children, ...rest }, ref) => {
    return (
      <RadioProvider hasError={hasError} isDisabled={isDisabled} value={value}>
        <ElRadioContainer ref={ref} {...rest}>
          {children}
        </ElRadioContainer>
      </RadioProvider>
    );
  },
);
