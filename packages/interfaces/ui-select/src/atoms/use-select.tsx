import { createContext, useContext, ReactNode, useState, useId } from 'react';

interface SelectContextType {
  hasLeadElement: boolean;
  hasTrailElement: boolean;
  hasError: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  selectId: string;
  selectWrapperId: string;
  registerLeadElement: () => void;
  registerTrailElement: () => void;
  setIsFocused: (focused: boolean) => void;
  value?: string;
  onValueChange?: (value: string) => void;
}

const SelectContext = createContext<SelectContextType | undefined>(undefined);

export const useSelect = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error('useSelect must be used within a SelectProvider');
  }
  return context;
};

interface SelectProviderProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const SelectProvider = ({
  children,
  hasError = false,
  isDisabled = false,
  value,
  onValueChange,
}: SelectProviderProps) => {
  const [hasLeadElement, setHasLeadElement] = useState(false);
  const [hasTrailElement, setHasTrailElement] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selectId = useId();
  const selectWrapperId = useId();

  const registerLeadElement = () => {
    setHasLeadElement(true);
  };

  const registerTrailElement = () => {
    setHasTrailElement(true);
  };

  return (
    <SelectContext.Provider
      value={{
        hasLeadElement,
        hasTrailElement,
        registerLeadElement,
        registerTrailElement,
        hasError,
        isDisabled,
        isFocused,
        setIsFocused,
        selectId,
        selectWrapperId,
        value,
        onValueChange,
      }}
    >
      {children}
    </SelectContext.Provider>
  );
};
