import {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useId,
} from 'react';

interface ModalContextType {
  isOpen: boolean;
  hasOverlay: boolean;
  hasShadow: boolean;
  width: string;
  modalId: string;
  onClose: () => void;
  getAttributes: () => Record<string, boolean | string>;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
  isOpen: boolean;
  hasOverlay?: boolean;
  hasShadow?: boolean;
  width?: string;
  onClose: () => void;
}

export const ModalProvider = ({
  children,
  isOpen = false,
  hasOverlay = true,
  hasShadow = true,
  width = 'md',
  onClose,
}: ModalProviderProps) => {
  const modalId = useId();

  // No need to handle ESC key manually, native dialog handles this

  const getAttributes = useCallback(() => {
    const attributes: Record<string, boolean | string> = {
      'data-is-open': isOpen,
      'data-has-overlay': hasOverlay,
      'data-has-shadow': hasShadow,
      'data-width': width,
    };

    return attributes;
  }, [isOpen, hasOverlay, hasShadow, width]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        hasOverlay,
        hasShadow,
        width,
        modalId,
        onClose,
        getAttributes,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
