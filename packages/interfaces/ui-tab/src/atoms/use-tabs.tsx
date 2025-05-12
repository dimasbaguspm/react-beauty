import { createContext, useContext, ReactNode } from 'react';

export type TabsType = 'underline' | 'pill' | 'ghost';

interface TabsContextValue {
  value: string;
  onValueChange: (value: string) => void;
  type: TabsType;
}

export const TabsContext = createContext<TabsContextValue | undefined>(
  undefined,
);

interface TabsProviderProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  type: TabsType;
}

export const TabsProvider = ({
  children,
  value,
  onValueChange,
  type = 'underline',
}: TabsProviderProps) => {
  return (
    <TabsContext.Provider
      value={{
        value,
        onValueChange,
        type,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextValue => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};
