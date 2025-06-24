import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * Button variants for visual style.
 * @public
 */
export type ButtonVariant =
  | 'primary' // Filled primary action
  | 'primary-outline' // Outlined primary action
  | 'primary-ghost' // Ghost (text) primary action
  | 'surface' // Filled neutral surface
  | 'surface-outline' // Outlined neutral surface
  | 'surface-ghost' // Ghost (text) neutral surface
  | 'danger' // Filled danger action
  | 'danger-outline' // Outlined danger action
  | 'danger-ghost' // Ghost (text) danger action
  | 'success' // Filled success action
  | 'success-outline' // Outlined success action
  | 'success-ghost' // Ghost (text) success action
  | 'info' // Filled info action
  | 'info-outline' // Outlined info action
  | 'info-ghost' // Ghost (text) info action
  | 'warning' // Filled warning action
  | 'warning-outline' // Outlined warning action
  | 'warning-ghost'; // Ghost (text) warning action

/**
 * Button sizes for controlling the button's visual weight and padding.
 * @public
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Button component.
 * @public
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button variant (visual style).
   * @default 'primary'
   * - 'primary': Filled primary action button.
   * - 'primary-outline': Outlined primary action button.
   * - 'primary-ghost': Ghost (text) primary action button.
   * - 'surface': Filled neutral surface button.
   * - 'surface-outline': Outlined neutral surface button.
   * - 'surface-ghost': Ghost (text) neutral surface button.
   * - 'danger': Filled danger action button.
   * - 'danger-outline': Outlined danger action button.
   * - 'danger-ghost': Ghost (text) danger action button.
   * - 'success': Filled success action button.
   * - 'success-outline': Outlined success action button.
   * - 'success-ghost': Ghost (text) success action button.
   * - 'info': Filled info action button.
   * - 'info-outline': Outlined info action button.
   * - 'info-ghost': Ghost (text) info action button.
   * - 'warning': Filled warning action button.
   * - 'warning-outline': Outlined warning action button.
   * - 'warning-ghost': Ghost (text) warning action button.
   */
  variant?: ButtonVariant;
  /**
   * The button size.
   * @default 'md'
   * - 'sm': Small button (compact, minimal padding, small font).
   * - 'md': Medium button (default, standard padding and font).
   * - 'lg': Large button (more padding, larger font).
   */
  size?: ButtonSize;
  /**
   * Icon to display on the left side of the button content.
   */
  iconLeft?: ReactNode;
  /**
   * Icon to display on the right side of the button content.
   */
  iconRight?: ReactNode;
  /**
   * The button content.
   */
  children: ReactNode;
  /**
   * If true, shows a loading spinner and disables the button.
   * The button content and icons are replaced by a loader icon.
   * @default false
   */
  isLoading?: boolean;
}
