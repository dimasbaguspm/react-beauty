import { createContext, useContext, ReactNode, useState } from 'react';

// CheckboxGroup Context
interface CheckboxGroupContextType {
  hasError: boolean;
  isDisabled: boolean;
  selectedValues: string[];
  name: string;
  onChange: (value: string, checked: boolean) => void;
}

const CheckboxGroupContext = createContext<
  CheckboxGroupContextType | undefined
>(undefined);

export const useCheckboxGroup = () => {
  return useContext(CheckboxGroupContext);
};

export interface CheckboxGroupProviderProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  name: string;
  defaultValues?: string[];
  values?: string[];
  onValueChange?: (values: string[]) => void;
}

export const CheckboxGroupProvider = ({
  children,
  hasError = false,
  isDisabled = false,
  name,
  defaultValues = [],
  values,
  onValueChange,
}: CheckboxGroupProviderProps) => {
  const [internalValues, setInternalValues] = useState<string[]>(defaultValues);

  // Determine if checkbox group is controlled
  const isControlled = values !== undefined;
  const selectedValues = isControlled ? values : internalValues;

  const handleChange = (value: string, checked: boolean) => {
    const newValues = checked
      ? [...selectedValues, value]
      : selectedValues.filter((val) => val !== value);

    // Update internal state if uncontrolled
    if (!isControlled) {
      setInternalValues(newValues);
    }

    // Call parent onChange if it exists
    onValueChange?.(newValues);
  };

  return (
    <CheckboxGroupContext.Provider
      value={{
        hasError,
        isDisabled,
        selectedValues,
        name,
        onChange: handleChange,
      }}
    >
      {children}
    </CheckboxGroupContext.Provider>
  );
};
