import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { ElRadioGroupContainer } from './style';
import { RadioGroupProvider } from './use-radio-group';

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  name: string;
  selectedValue?: string;
  onValueChange: (value: string) => void;
  isDisabled?: boolean;
  hasError?: boolean;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      children,
      name,
      selectedValue,
      onValueChange,
      isDisabled = false,
      hasError = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <RadioGroupProvider
        name={name}
        selectedValue={selectedValue}
        onChange={onValueChange}
        isDisabled={isDisabled}
        hasError={hasError}
      >
        <ElRadioGroupContainer ref={ref} {...rest}>
          {children}
        </ElRadioGroupContainer>
      </RadioGroupProvider>
    );
  },
);
