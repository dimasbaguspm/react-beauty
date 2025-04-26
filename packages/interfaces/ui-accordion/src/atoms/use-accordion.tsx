import React, { createContext, useContext, useState, useId } from 'react';

interface AccordionContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  contentId: string;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined,
);

export const AccordionProvider: React.FC<{
  children: React.ReactNode;
  defaultExpanded?: boolean;
}> = ({ children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentId = useId();

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded, contentId }}>
      {children}
    </AccordionContext.Provider>
  );
};

export const useAccordion = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};
