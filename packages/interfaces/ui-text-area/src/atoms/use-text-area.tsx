import { createContext, useContext, ReactNode, useState, useId } from 'react';

interface TextAreaContextType {
  hasError: boolean;
  isDisabled: boolean;
  isFocused: boolean;
  textAreaWrapperId: string;
  setIsFocused: (focused: boolean) => void;
  getAttributes: () => Record<string, boolean>;
}

const TextAreaContext = createContext<TextAreaContextType | undefined>(
  undefined,
);

export const useTextArea = () => {
  const context = useContext(TextAreaContext);
  if (!context) {
    throw new Error('useTextArea must be used within a TextAreaProvider');
  }
  return context;
};

interface TextAreaProviderProps {
  children: ReactNode;
  hasError?: boolean;
  isDisabled?: boolean;
}

export const TextAreaProvider = ({
  children,
  hasError = false,
  isDisabled = false,
}: TextAreaProviderProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const textAreaWrapperId = useId();

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
    <TextAreaContext.Provider
      value={{
        hasError,
        isDisabled,
        isFocused,
        textAreaWrapperId,
        setIsFocused,
        getAttributes,
      }}
    >
      {children}
    </TextAreaContext.Provider>
  );
};
