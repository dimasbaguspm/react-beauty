import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useId,
  useEffect,
} from 'react';

interface SwitchContextType {
  isChecked: boolean;
  hasError: boolean;
  isDisabled: boolean;
  inputWrapperId: string;
  onChange: (checked: boolean) => void;
  getAttributes: () => Record<string, boolean>;
}

const SwitchContext = createContext<SwitchContextType | undefined>(undefined);

export const useSwitch = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error('useSwitch must be used within a SwitchProvider');
  }
  return context;
};

interface SwitchProviderProps {
  children: ReactNode;
  isChecked?: boolean;
  hasError?: boolean;
  isDisabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const SwitchProvider = ({
  children,
  isChecked = false,
  hasError = false,
  isDisabled = false,
  onChange = () => {},
}: SwitchProviderProps) => {
  const [checkedState, setCheckedState] = useState(isChecked);
  const inputWrapperId = useId();

  useEffect(() => {
    setCheckedState(isChecked);
  }, [isChecked]);

  const handleChange = (checked: boolean) => {
    if (!isDisabled) {
      setCheckedState(checked);
      onChange(checked);
    }
  };

  const getAttributes = () => {
    const attributes: Record<string, boolean> = {
      'data-checked': checkedState,
      'data-error': hasError,
      'data-disabled': isDisabled,
    };

    return attributes;
  };

  return (
    <SwitchContext.Provider
      value={{
        isChecked: checkedState,
        hasError,
        isDisabled,
        inputWrapperId,
        onChange: handleChange,
        getAttributes,
      }}
    >
      {children}
    </SwitchContext.Provider>
  );
};
