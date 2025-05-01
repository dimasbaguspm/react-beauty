import { createContext, useContext, ReactNode } from 'react';

// Radio Group Context
interface RadioGroupContextType {
  name: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  isDisabled: boolean;
  hasError: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextType | undefined>(
  undefined,
);

export const useRadioGroup = () => {
  return useContext(RadioGroupContext);
};

interface RadioGroupProviderProps {
  children: ReactNode;
  name: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  isDisabled: boolean;
  hasError: boolean;
}

export const RadioGroupProvider = ({
  children,
  name,
  selectedValue,
  onChange,
  isDisabled,
  hasError,
}: RadioGroupProviderProps) => {
  return (
    <RadioGroupContext.Provider
      value={{
        name,
        selectedValue,
        onChange,
        isDisabled,
        hasError,
      }}
    >
      {children}
    </RadioGroupContext.Provider>
  );
};
