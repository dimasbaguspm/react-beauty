import * as fs from 'node:fs';
import * as path from 'node:path';

import { css } from '@linaria/core';
import { FC, ReactNode } from 'react';

import { ThemeContext } from './context';
import { ReactBeautyUITheme } from './types';
import { useSetupThemeEffect } from './use-setup-theme-effect';

/**
 * Checks if a CSS file exists at the specified package path using Node.js fs module
 * and returns the path for import if it exists, or an empty string if not.
 * This function is meant to be used during build time, not in the browser.
 */
const dynamicImport = (packagePath: string): string => {
  try {
    // Create resolved path relative to the current file
    const resolvedPath = `../../${packagePath}/dist/index.css`;
    // Get the absolute path
    const absolutePath = path.resolve(__dirname, resolvedPath);

    // Use fs.existsSync to check if the file exists
    if (fs.existsSync(absolutePath)) {
      return resolvedPath;
    } else {
      console.warn(`CSS file does not exist: ${absolutePath}`);
      return '';
    }
  } catch (error) {
    // If there's any error, return empty string
    console.warn(`Failed to check CSS file existence: ${packagePath}`, error);
    return '';
  }
};

/**
 * Helper function to create CSS import statements if the file exists
 */
const getImportStatement = (packagePath: string): string => {
  const cssPath = dynamicImport(packagePath);
  return cssPath ? `@import '${cssPath}';` : '';
};

export const globals = css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Mulish&display=swap');

    @import './dark/index.css';
    @import './light/index.css';

    ${getImportStatement('ui-accordion')}
    ${getImportStatement('ui-alert')}
    ${getImportStatement('ui-avatar')}
    ${getImportStatement('ui-bottom-sheet')}
    ${getImportStatement('ui-breadcrumb')}
    ${getImportStatement('ui-button')}
    ${getImportStatement('ui-checkbox')}
    ${getImportStatement('ui-drawer')}
    ${getImportStatement('ui-empty-state')}
    ${getImportStatement('ui-icon')}
    ${getImportStatement('ui-loader')}
    ${getImportStatement('ui-menu-item')}
    ${getImportStatement('ui-modal')}
    ${getImportStatement('ui-pagination')}
    ${getImportStatement('ui-radio')}
    ${getImportStatement('ui-select')}
    ${getImportStatement('ui-sidebar')}
    ${getImportStatement('ui-switch')}
    ${getImportStatement('ui-tag')}
    ${getImportStatement('ui-text')}
    ${getImportStatement('ui-text-area')}
    ${getImportStatement('ui-text-input')}
    ${getImportStatement('ui-tooltip')}

    :root {
      box-sizing: border-box;
      font-family: var(--font-primary);
      color: var(--colors-main-bulma);
      background-color: var(--colors-main-goku);
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
