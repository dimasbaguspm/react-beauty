import {
  createContext,
  useContext,
  ReactNode,
  useId,
  useCallback,
} from 'react';

export type LoaderType = 'circular' | 'linear';

interface LoaderContextType {
  isLoading: boolean;
  type: LoaderType;
  loaderId: string;
  getAttributes: () => Record<string, string>;
}

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

interface LoaderProviderProps {
  children: ReactNode;
  isLoading?: boolean;
  type?: LoaderType;
}

export const LoaderProvider = ({
  children,
  isLoading = true,
  type = 'circular',
}: LoaderProviderProps) => {
  const loaderId = useId();

  const getAttributes = useCallback(() => {
    const attributes: Record<string, string> = {
      'data-type': type,
    };

    return attributes;
  }, [type]);

  return (
    <LoaderContext.Provider
      value={{
        isLoading,
        type,
        loaderId,
        getAttributes,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
