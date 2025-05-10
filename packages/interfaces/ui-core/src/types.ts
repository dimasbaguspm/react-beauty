export type ReactBeautyUITheme = 'dark' | 'light';

export interface ReactBeautyUIThemeContext {
  theme: ReactBeautyUITheme;
  changeTheme: (theme: ReactBeautyUITheme) => void;
}
