import {
  createContext,
  useContext,
  ReactNode,
  useId,
  useCallback,
} from 'react';

export type LoaderType = 'circular' | 'linear';

interface LoaderContextType {
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
  type?: LoaderType;
}

export const LoaderProvider = ({
  children,

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
        type,
        loaderId,
        getAttributes,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};
