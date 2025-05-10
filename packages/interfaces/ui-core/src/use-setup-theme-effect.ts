import { useCallback, useLayoutEffect } from 'react';

import { ReactBeautyUITheme } from './types';

export const useSetupThemeEffect = (defaultTheme?: ReactBeautyUITheme) => {
  const parent = document.documentElement;

  useLayoutEffect(() => {
    if (defaultTheme) {
      parent.setAttribute('data-theme', defaultTheme);
    }
    return () => {
      parent.removeAttribute('data-theme');
    };
  }, [defaultTheme]);

  const handleChangeTheme = useCallback((theme: ReactBeautyUITheme) => {
    parent.setAttribute('data-theme', theme);
  }, []);

  return { changeTheme: handleChangeTheme };
};
