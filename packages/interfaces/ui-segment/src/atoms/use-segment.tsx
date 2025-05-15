import { createContext, ReactNode, useCallback, useContext } from 'react';

export type SegmentValue = string;

interface SegmentContextType {
  value: SegmentValue;
  onValueChange: (value: SegmentValue) => void;
  getItemProps: (value: SegmentValue) => {
    role: string;
    'aria-selected': boolean;
    onClick: () => void;
    'data-active': boolean;
  };
}

const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

export const useSegment = () => {
  const context = useContext(SegmentContext);
  if (!context) {
    throw new Error('useSegment must be used within a SegmentProvider');
  }
  return context;
};

interface SegmentProviderProps {
  children: ReactNode;
  value: SegmentValue;
  onValueChange: (value: SegmentValue) => void;
}

export const SegmentProvider = ({
  children,
  value,
  onValueChange,
}: SegmentProviderProps) => {
  const getItemProps = useCallback(
    (itemValue: SegmentValue) => ({
      role: 'tab',
      'aria-selected': value === itemValue,
      onClick: () => onValueChange(itemValue),
      'data-active': value === itemValue,
    }),
    [value, onValueChange],
  );

  return (
    <SegmentContext.Provider value={{ value, onValueChange, getItemProps }}>
      {children}
    </SegmentContext.Provider>
  );
};
