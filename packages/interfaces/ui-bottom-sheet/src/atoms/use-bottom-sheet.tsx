import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useId,
} from 'react';

import { BottomSheetHeight } from './bottom-sheet-container';

interface BottomSheetContextType {
  isOpen: boolean;
  hasOverlay: boolean;
  hasShadow: boolean;
  height: BottomSheetHeight;
  sheetId: string;
  onClose: () => void;
  getAttributes: () => Record<string, boolean | string>;
}

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined,
);

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider');
  }
  return context;
};

interface BottomSheetProviderProps {
  children: ReactNode;
  isOpen: boolean;
  hasOverlay?: boolean;
  hasShadow?: boolean;
  height?: BottomSheetHeight;
  onClose: () => void;
}

export const BottomSheetProvider = ({
  children,
  isOpen = false,
  hasOverlay = true,
  hasShadow = true,
  height = 'md',
  onClose,
}: BottomSheetProviderProps) => {
  const sheetId = useId();

  const getAttributes = useCallback(() => {
    const attributes: Record<string, boolean | string> = {
      'data-is-open': isOpen,
      'data-has-overlay': hasOverlay,
      'data-has-shadow': hasShadow,
      'data-height': height,
    };

    return attributes;
  }, [isOpen, hasOverlay, hasShadow, height]);

  return (
    <BottomSheetContext.Provider
      value={{
        isOpen,
        hasOverlay,
        hasShadow,
        height,
        sheetId,
        onClose,
        getAttributes,
      }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
};
