import { css } from '@linaria/core';
import { FC, ReactNode } from 'react';

import { ThemeContext } from './context';
import { ReactBeautyUITheme } from './types';
import { useSetupThemeEffect } from './use-setup-theme-effect';

console.log(process.env.NODE_ENV);

const prodScripts = `
  @import '../../ui-accordion/dist/index.css';
    @import '../../ui-alert/dist/index.css';
    @import '../../ui-avatar/dist/index.css';
    @import '../../ui-bottom-sheet/dist/index.css';
    @import '../../ui-breadcrumb/dist/index.css';
    @import '../../ui-button/dist/index.css';
    @import '../../ui-checkbox/dist/index.css';
    @import '../../ui-drawer/dist/index.css';
    @import '../../ui-empty-state/dist/index.css';
    @import '../../ui-icon/dist/index.css';
    @import '../../ui-loader/dist/index.css';
    @import '../../ui-menu-item/dist/index.css';
    @import '../../ui-modal/dist/index.css';
    @import '../../ui-pagination/dist/index.css';
    @import '../../ui-radio/dist/index.css';
    @import '../../ui-select/dist/index.css';
    @import '../../ui-sidebar/dist/index.css';
    @import '../../ui-switch/dist/index.css';
    @import '../../ui-tag/dist/index.css';
    @import '../../ui-text-area/dist/index.css';
    @import '../../ui-text-input/dist/index.css';
    @import '../../ui-tooltip/dist/index.css';
  `;

export const globals = css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Mulish&display=swap');

    @import './dark/index.css';
    @import './light/index.css';
    ${process.env.NODE_ENV === 'production' ? prodScripts : ''}

    :root {
      box-sizing: border-box;
      font-family: var(--font-primary);
      color: var(--colors-main-bulma);
      background-color: var(--colors-main-gohan);
    }

    *,
    *:before,
    *:after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
      text-decoration: none;
      list-style: none;
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
  defaultTheme = 'light',
  children,
}) => {
  const { theme, changeTheme } = useSetupThemeEffect(defaultTheme);

  return (
    <ThemeContext.Provider
      value={{
        changeTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
