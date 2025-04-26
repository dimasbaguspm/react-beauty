import { css } from '@linaria/core';
import { FC, ReactNode } from 'react';

import { ReactBeautyUITheme } from './types';
import { useSetupThemeEffect } from './use-setup-theme-effect';

export const globals = css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Mulish&display=swap');

    @import './dark/index.css';
    @import './light/index.css';

    :root {
      box-sizing: border-box;
      font-family: var(--font-primary);
    }

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
  }
`;

export interface ReactBeautyUIProviderProps {
  children: ReactNode;
  /**
   * The default theme to use for the application.
   */
  defaultTheme?: ReactBeautyUITheme;
}

export const ReactBeautyUIProvider: FC<ReactBeautyUIProviderProps> = ({
  defaultTheme,
  children,
}) => {
  useSetupThemeEffect(defaultTheme);

  return children;
};
