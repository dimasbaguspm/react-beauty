import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useId,
} from 'react';

type DrawerDirection = 'left' | 'right';

interface DrawerContextType {
  isOpen: boolean;
  direction: DrawerDirection;
  hasOverlay: boolean;
  hasShadow: boolean;
  width: string;
  drawerId: string;
  onClose: () => void;
  getAttributes: () => Record<string, boolean | string>;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

interface DrawerProviderProps {
  children: ReactNode;
  isOpen: boolean;
  direction?: DrawerDirection;
  hasOverlay?: boolean;
  hasShadow?: boolean;
  width?: string;
  onClose: () => void;
}

export const DrawerProvider = ({
  children,
  isOpen = false,
  direction = 'right',
  hasOverlay = true,
  hasShadow = true,
  width = 'md',
  onClose,
}: DrawerProviderProps) => {
  const drawerId = useId();

  // No need to handle ESC key manually, native dialog handles this

  const getAttributes = useCallback(() => {
    const attributes: Record<string, boolean | string> = {
      'data-is-open': isOpen,
      'data-direction': direction,
      'data-has-overlay': hasOverlay,
      'data-has-shadow': hasShadow,
      'data-width': width,
    };

    return attributes;
  }, [isOpen, direction, hasOverlay, hasShadow, width]);

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        direction,
        hasOverlay,
        hasShadow,
        width,
        drawerId,
        onClose,
        getAttributes,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
