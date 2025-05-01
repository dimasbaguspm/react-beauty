import { createContext, useContext, ReactNode, useState, useId } from 'react';

import { useRadioGroup } from './use-radio-group';

// Radio Context
interface RadioContextType {
  hasError: boolean;
  isDisabled: boolean;
  isChecked: boolean;
  isFocused: boolean;
  radioId: string;
  value: string;
  name: string;
  onChange: (value: string) => void;
  setIsFocused: (focused: boolean) => void;
  getAttributes: () => Record<string, boolean | string>;
}

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export const useRadio = () => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error('useRadio must be used within a RadioProvider');
  }
  return context;
};

interface RadioProviderProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  value: string;
}

export const RadioProvider = ({
  children,
  hasError = false,
  isDisabled = false,
  value,
}: RadioProviderProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const radioId = useId();

  // Get values from RadioGroup if available
  const radioGroup = useRadioGroup();

  // Derive values from RadioGroup when available, otherwise use props
  const effectiveHasError = radioGroup?.hasError || hasError;
  const effectiveIsDisabled = radioGroup?.isDisabled || isDisabled;
  const isChecked = radioGroup ? radioGroup.selectedValue === value : false;
  const name = radioGroup?.name || '';
  const onChange = radioGroup?.onChange || (() => {});

  const getAttributes = () => {
    const attributes: Record<string, boolean | string> = {
      'data-error': effectiveHasError,
      'data-disabled': effectiveIsDisabled,
      'data-checked': isChecked,
      'data-is-focused': isFocused,
      'data-is-blurred': !isFocused,
    };

    return attributes;
  };

  return (
    <RadioContext.Provider
      value={{
        hasError: effectiveHasError,
        isDisabled: effectiveIsDisabled,
        isChecked,
        isFocused,
        radioId,
        value,
        name,
        onChange,
        setIsFocused,
        getAttributes,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};
