import type { ButtonHTMLAttributes, ReactNode } from 'react';

/**
 * IconButton visual variants for intent and style.
 * @public
 */
export type IconButtonVariant =
  | 'primary'
  | 'primary-outline'
  | 'primary-ghost'
  | 'surface'
  | 'surface-outline'
  | 'surface-ghost'
  | 'danger'
  | 'danger-outline'
  | 'danger-ghost'
  | 'success'
  | 'success-outline'
  | 'success-ghost'
  | 'info'
  | 'info-outline'
  | 'info-ghost'
  | 'warning'
  | 'warning-outline'
  | 'warning-ghost';

/**
 * IconButton sizes for controlling the button's visual weight and padding.
 * @public
 */
export type IconButtonSize = 'sm' | 'md' | 'lg';

/**
 * IconButton shape variants.
 * @public
 */
export type IconButtonShape = 'rounded' | 'semi-square';

/**
 * Props for the IconButton component.
 * @public
 */
export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /**
   * The icon to render inside the button. Should be a single ReactNode (icon component).
   */
  children: ReactNode;
  /**
   * The visual variant (intent and style).
   * @default 'primary'
   */
  variant?: IconButtonVariant;
  /**
   * The size of the button.
   * @default 'md'
   */
  size?: IconButtonSize;
  /**
   * The shape of the button: fully rounded (circle) or semi-square (rounded corners).
   * @default 'rounded'
   */
  shape?: IconButtonShape;
  /**
   * If true, shows a loading spinner and disables the button.
   * @default false
   */
  isLoading?: boolean;
  /**
   * If true, disables the button.
   * @default false
   */
  disabled?: boolean;
  /**
   * Accessible label for the button (required for icon-only buttons).
   */
  'aria-label': string;
}
