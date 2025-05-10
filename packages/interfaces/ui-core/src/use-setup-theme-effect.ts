import { useCallback, useLayoutEffect, useState } from 'react';

import { ReactBeautyUITheme } from './types';

const isPreferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

export const useSetupThemeEffect = (defaultTheme?: ReactBeautyUITheme) => {
  const [theme, setTheme] = useState(
    defaultTheme || (isPreferDark ? 'dark' : 'light'),
  );

  const parent = document.documentElement;

  useLayoutEffect(() => {
    if (theme) {
      parent.setAttribute('data-theme', theme);
    }
    return () => {
      parent.removeAttribute('data-theme');
    };
  }, []);

  const handleChangeTheme = useCallback((theme: ReactBeautyUITheme) => {
    parent.setAttribute('data-theme', theme);
    setTheme(theme);
  }, []);

  return { changeTheme: handleChangeTheme, theme };
};
