import { css } from "@linaria/core";
import { FC, ReactNode } from "react";

import { ReactBeautyUITheme } from "./types";
import { useSetupThemeEffect } from "./use-setup-theme-effect";

export const globals = css`
  :global() {
    @import "./base/index.css";
    @import "./dark/index.css";
    @import "./light/index.css";
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
