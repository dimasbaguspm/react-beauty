import { FC, ReactNode } from "react";

import "./index.css";
import { ReactBeautyUITheme } from "./types";
import { useSetupThemeEffect } from "./use-setup-theme-effect";

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
