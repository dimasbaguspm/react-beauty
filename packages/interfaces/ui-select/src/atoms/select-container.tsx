import { forwardRef, ReactNode, HTMLAttributes } from 'react';

import { ElSelectContainer } from './style';
import { SelectProvider } from './use-select';

export interface SelectContainerProps extends HTMLAttributes<HTMLDivElement> {
  hasError?: boolean;
  isDisabled?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
  children: ReactNode;
}

export const SelectContainer = forwardRef<HTMLDivElement, SelectContainerProps>(
  (
    {
      hasError = false,
      isDisabled = false,
      value,
      onValueChange,
      children,
      ...rest
    },
    ref,
  ) => {
    const handleChange = (newValue: string) => {
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    return (
      <SelectProvider
        hasError={hasError}
        isDisabled={isDisabled}
        value={value}
        onValueChange={handleChange}
      >
        <ElSelectContainer ref={ref} {...rest}>
          {children}
        </ElSelectContainer>
      </SelectProvider>
    );
  },
);
