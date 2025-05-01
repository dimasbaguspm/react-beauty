import {
  forwardRef,
  ReactNode,
  HTMLAttributes,
  useState,
  useEffect,
} from 'react';

import { ElCheckboxContainer } from './style';
import { CheckboxProvider } from './use-checkbox';
import { useCheckboxGroup, CheckboxGroupProvider } from './use-checkbox-group';

export interface CheckboxInputProps extends HTMLAttributes<HTMLDivElement> {
  hasError?: boolean;
  isDisabled?: boolean;
  value: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onValueChange?: (checked: boolean) => void;
  children: ReactNode;
}

export const CheckboxInputInner = forwardRef<
  HTMLDivElement,
  CheckboxInputProps
>(({ hasError = false, isDisabled = false, value, children, ...rest }, ref) => {
  return (
    <CheckboxProvider hasError={hasError} isDisabled={isDisabled} value={value}>
      <ElCheckboxContainer ref={ref} {...rest}>
        {children}
      </ElCheckboxContainer>
    </CheckboxProvider>
  );
});

export const CheckboxInput = forwardRef<HTMLDivElement, CheckboxInputProps>(
  (props, ref) => {
    const {
      value,
      checked,
      defaultChecked,
      hasError,
      isDisabled,
      onValueChange,
    } = props;
    const existingGroup = useCheckboxGroup();
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    // Initialize the selected values array if this is a standalone checkbox
    useEffect(() => {
      if (!existingGroup && defaultChecked) {
        setSelectedValues([value]);
      }
    }, [existingGroup, value, defaultChecked]);

    // Update the selected values when checked prop changes
    useEffect(() => {
      if (!existingGroup && checked !== undefined) {
        setSelectedValues(checked ? [value] : []);
      }
    }, [existingGroup, checked, value]);

    // If we're already inside a CheckboxGroup, render the inner component directly
    if (existingGroup) {
      return <CheckboxInputInner {...props} ref={ref} />;
    }

    // Otherwise, create an implicit group for this standalone checkbox
    const handleGroupValueChange = (values: string[]) => {
      const isChecked = values.includes(value);
      onValueChange?.(isChecked);
      setSelectedValues(values);
    };

    return (
      <CheckboxGroupProvider
        name={`standalone-${value}`}
        values={selectedValues}
        onValueChange={handleGroupValueChange}
        hasError={hasError}
        isDisabled={isDisabled}
      >
        <CheckboxInputInner {...props} ref={ref} />
      </CheckboxGroupProvider>
    );
  },
);
