import { createElement, forwardRef, HTMLAttributes, ReactNode } from 'react';

import { elText } from './style';

import type { LinariaClassName } from '@linaria/core';

export type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'small';

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextElement;
  children: ReactNode;
};

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ as = 'p', children, ...props }, ref) => {
    // Directly use the specified HTML element instead of relying on the 'as' prop
    return createElement(
      as,
      {
        ...props,
        ref,
        className: [elText]
          .concat((props?.className || []) as LinariaClassName)
          .join(' '),
      },
      children,
    );
  },
);

Text.displayName = 'Text';
