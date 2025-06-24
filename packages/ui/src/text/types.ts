/**
 * Types for the Text component.
 * @packageDocumentation
 */
import type { ReactNode } from 'react';

/**
 * Supported text variants for semantic and visual roles.
 */
export type TextVariant =
  | 'body'
  | 'caption'
  | 'heading'
  | 'subheading'
  | 'overline'
  | 'code';

/**
 * Font weight options.
 */
export type TextWeight = 'regular' | 'medium' | 'bold';

/**
 * Text color intent (maps to design tokens).
 */
export type TextColor =
  | 'primary'
  | 'surface'
  | 'danger'
  | 'warning'
  | 'info'
  | 'success'
  | 'disabled';

/**
 * Props for the Text component.
 */
export interface TextProps {
  /**
   * The content to render inside the text component.
   */
  children: ReactNode;
  /**
   * Visual and semantic variant of the text.
   * @default 'body'
   */
  variant?: TextVariant;
  /**
   * Font weight.
   * @default 'regular'
   */
  weight?: TextWeight;
  /**
   * Color intent (maps to design tokens).
   * @default 'surface'
   */
  color?: TextColor;
  /**
   * Truncate text with ellipsis if it overflows.
   * @default false
   */
  truncate?: boolean;
  /**
   * Additional className for custom styling.
   */
  className?: string;
  /**
   * Render as a different HTML element (e.g., span, p, h1-h6).
   * @default 'span'
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * ARIA label for accessibility.
   */
  'aria-label'?: string;
  /**
   * If true, text will not be selectable (user-select: none).
   */
  unselectable?: boolean;
}
