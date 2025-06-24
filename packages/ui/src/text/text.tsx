import React, { forwardRef } from 'react';

import { TextRoot } from './styles';

import type { TextProps } from './types';

/**
 * Text component for semantic, accessible, and design-token-driven typography.
 *
 * @remarks
 * - Uses Linaria for zero-runtime CSS-in-JS styling.
 * - All styles are mapped to design system tokens (see styles.ts).
 * - Supports variants, weights, color intents, truncation, and custom elements.
 *
 * @example
 * <Text variant="heading" color="primary">Heading</Text>
 * <Text variant="caption" truncate>Some long caption</Text>
 */
export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as = 'span',
      variant = 'body',
      weight = 'regular',
      color = 'surface',
      truncate,
      unselectable = false,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const Component = as as keyof JSX.IntrinsicElements;
    return (
      <TextRoot
        as={Component}
        ref={ref as React.Ref<HTMLElement>}
        data-variant={variant}
        data-weight={weight}
        data-color={color}
        data-truncate={truncate ? 'true' : undefined}
        data-unselectable={unselectable ? 'true' : undefined}
        className={className}
        {...rest}
      >
        {children}
      </TextRoot>
    );
  },
);
