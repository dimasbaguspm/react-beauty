import { createContext, useContext, ReactNode, useState, useId } from 'react';

interface TextInputContextType {
  hasLeadElement: boolean;
  hasTrailElement: boolean;
  hasError: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  inputWrapperId: string;
  registerLeadElement: () => void;
  registerTrailElement: () => void;
  setIsFocused: (focused: boolean) => void;
  getAttributes: () => Record<string, boolean>;
}

const TextInputContext = createContext<TextInputContextType | undefined>(
  undefined,
);

export const useTextInput = () => {
  const context = useContext(TextInputContext);
  if (!context) {
    throw new Error('useTextInput must be used within a TextInputProvider');
  }
  return context;
};

interface TextInputProviderProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
}

export const TextInputProvider = ({
  children,
  hasError = false,
  isDisabled = false,
}: TextInputProviderProps) => {
  const [hasLeadElement, setHasLeadElement] = useState(false);
  const [hasTrailElement, setHasTrailElement] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const inputWrapperId = useId();

  const registerLeadElement = () => {
    setHasLeadElement(true);
  };

  const registerTrailElement = () => {
    setHasTrailElement(true);
  };

  const getAttributes = () => {
    const attributes: Record<string, boolean> = {
      'data-error': hasError,
      'data-disabled': isDisabled,
      'data-is-focused': isFocused,
      'data-is-blurred': !isFocused,
    };

    return attributes;
  };

  return (
    <TextInputContext.Provider
      value={{
        hasLeadElement,
        hasTrailElement,
        registerLeadElement,
        registerTrailElement,
        getAttributes,
        setIsFocused,
        isFocused,
        hasError,
        isDisabled,
        inputWrapperId,
      }}
    >
      {children}
    </TextInputContext.Provider>
  );
};
