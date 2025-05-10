import { createContext, useContext } from 'react';

import { ReactBeautyUIThemeContext } from './types';

export const ThemeContext = createContext<ReactBeautyUIThemeContext | null>(
  null,
);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
