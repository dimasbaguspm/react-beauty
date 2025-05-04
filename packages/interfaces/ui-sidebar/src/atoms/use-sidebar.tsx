import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from 'react';

type SidebarContextType = {
  isExpanded: boolean;
  toggleExpanded: () => void;
  expand: () => void;
  collapse: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export interface SidebarProviderProps {
  children: ReactNode;
  isExpanded?: boolean;
  onExpandedChange?: (isExpanded: boolean) => void;
}

export const SidebarProvider = ({
  children,
  isExpanded: isExpandedProp = true,
  onExpandedChange,
}: SidebarProviderProps) => {
  const [isExpandedState, setIsExpandedState] = useState(isExpandedProp);

  // Use the prop value if it's controlled externally
  const isExpanded = onExpandedChange ? isExpandedProp : isExpandedState;

  const toggleExpanded = useCallback(() => {
    const newValue = !isExpanded;
    if (onExpandedChange) {
      onExpandedChange(newValue);
    } else {
      setIsExpandedState(newValue);
    }
  }, [isExpanded, onExpandedChange]);

  const expand = useCallback(() => {
    if (!isExpanded) {
      if (onExpandedChange) {
        onExpandedChange(true);
      } else {
        setIsExpandedState(true);
      }
    }
  }, [isExpanded, onExpandedChange]);

  const collapse = useCallback(() => {
    if (isExpanded) {
      if (onExpandedChange) {
        onExpandedChange(false);
      } else {
        setIsExpandedState(false);
      }
    }
  }, [isExpanded, onExpandedChange]);

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        toggleExpanded,
        expand,
        collapse,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = (): SidebarContextType => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
