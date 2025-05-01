import { createContext, useContext, ReactNode, useState, useId } from 'react';

import { useCheckboxGroup } from './use-checkbox-group';

// Checkbox Context
interface CheckboxContextType {
  hasError: boolean;
  isDisabled: boolean;
  isChecked: boolean;
  isFocused: boolean;
  checkboxId: string;
  value: string;
  name: string;
  onChange: (value: string, checked: boolean) => void;
  setIsFocused: (focused: boolean) => void;
  getAttributes: () => Record<string, boolean | string>;
}

const CheckboxContext = createContext<CheckboxContextType | undefined>(
  undefined,
);

export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  if (!context) {
    throw new Error('useCheckbox must be used within a CheckboxProvider');
  }
  return context;
};

interface CheckboxProviderProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  value: string;
}

export const CheckboxProvider = ({
  children,
  hasError = false,
  isDisabled = false,
  value,
}: CheckboxProviderProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const checkboxId = useId();

  // Get values from CheckboxGroup
  const checkboxGroup = useCheckboxGroup();

  if (!checkboxGroup) {
    throw new Error(
      'CheckboxProvider must be used within a CheckboxGroupProvider',
    );
  }

  // Determine if checkbox is checked based on the group's selected values
  const isChecked = checkboxGroup.selectedValues.includes(value);

  // Combine error and disabled states from props and group context
  const effectiveHasError = checkboxGroup.hasError || hasError;
  const effectiveIsDisabled = checkboxGroup.isDisabled || isDisabled;
  const name = checkboxGroup.name;

  const handleChange = (value: string, checkedState: boolean) => {
    if (effectiveIsDisabled) return;

    // Notify checkbox group
    checkboxGroup.onChange(value, checkedState);
  };

  const getAttributes = () => {
    return {
      'data-error': effectiveHasError,
      'data-disabled': effectiveIsDisabled,
      'data-checked': isChecked,
      'data-is-focused': isFocused,
      'data-is-blurred': !isFocused,
    };
  };

  return (
    <CheckboxContext.Provider
      value={{
        hasError: effectiveHasError,
        isDisabled: effectiveIsDisabled,
        isChecked,
        isFocused,
        checkboxId,
        value,
        name,
        onChange: handleChange,
        setIsFocused,
        getAttributes,
      }}
    >
      {children}
    </CheckboxContext.Provider>
  );
};
