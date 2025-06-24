import { cx } from '@linaria/core';
import { LoaderCircle } from 'lucide-react';
import React, { forwardRef } from 'react';

import { ButtonBase, LoaderIcon } from './styles';

import type { ButtonProps } from './types';

/**
 * Accessible, theme-aware button component for React Beauty UI
 *
 * @param props - Button props (see {@link ButtonProps})
 * @returns {JSX.Element} Button element
 * @public
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      children,
      className,
      iconLeft,
      iconRight,
      isLoading = false,
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const isDisabled = rest.disabled || isLoading;
    return (
      <ButtonBase
        ref={ref}
        className={cx(className)}
        type={rest.type || 'button'}
        data-variant={variant}
        data-size={size}
        aria-pressed={rest['aria-pressed']}
        aria-busy={isLoading || undefined}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading ? (
          <>
            <LoaderIcon>
              <LoaderCircle
                size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
                aria-label="Loading"
              />
            </LoaderIcon>
            {children}
          </>
        ) : (
          <>
            {iconLeft}
            {children}
            {iconRight}
          </>
        )}
      </ButtonBase>
    );
  },
);
