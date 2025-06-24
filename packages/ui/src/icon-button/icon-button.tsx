import { cx } from '@linaria/core';
import { LoaderCircle } from 'lucide-react';
import React, { forwardRef } from 'react';

import { IconButtonBase, LoaderIcon } from './styles';

import type { IconButtonProps } from './types';

/**
 * Accessible, theme-aware icon button for React Beauty UI
 *
 * @param props - IconButton props (see {@link IconButtonProps})
 * @returns {JSX.Element} IconButton element
 * @public
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      shape = 'rounded',
      isLoading = false,
      disabled = false,
      'aria-label': ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;
    return (
      <IconButtonBase
        ref={ref}
        className={cx(className)}
        type={rest.type || 'button'}
        data-variant={variant}
        data-size={size}
        data-shape={shape}
        aria-label={ariaLabel}
        aria-busy={isLoading || undefined}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        {...rest}
      >
        {isLoading ? (
          <LoaderIcon>
            <LoaderCircle
              size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18}
              aria-label="Loading"
            />
          </LoaderIcon>
        ) : (
          children
        )}
      </IconButtonBase>
    );
  },
);
IconButton.displayName = 'IconButton';
