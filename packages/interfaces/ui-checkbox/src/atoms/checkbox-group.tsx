import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { CheckboxGroupHelperText } from './checkbox-group-helper-text';
import { ElCheckboxGroupContainer } from './style';
import { CheckboxGroupProvider } from './use-checkbox-group';

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  name: string;
  defaultValues?: string[];
  values?: string[];
  onValueChange?: (values: string[]) => void;
  isDisabled?: boolean;
  hasError?: boolean;
}

export const CheckboxGroup = Object.assign(
  forwardRef<HTMLDivElement, CheckboxGroupProps>(
    (
      {
        children,
        name,
        defaultValues,
        values,
        onValueChange,
        isDisabled = false,
        hasError = false,
        ...rest
      },
      ref,
    ) => {
      return (
        <CheckboxGroupProvider
          name={name}
          defaultValues={defaultValues}
          values={values}
          onValueChange={onValueChange}
          isDisabled={isDisabled}
          hasError={hasError}
        >
          <ElCheckboxGroupContainer ref={ref} {...rest}>
            {children}
          </ElCheckboxGroupContainer>
        </CheckboxGroupProvider>
      );
    },
  ),
  { HelperText: CheckboxGroupHelperText },
);
