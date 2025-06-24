import { styled } from '@linaria/react';

/**
 * Button style variants using design system tokens.
 * All colors, spacing, and radii use CSS variables.
 *
 * @see ButtonVariant in types.ts
 */
export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--rb-space-2);
  font-size: var(--rb-font-size-md);
  font-weight: 500;
  border-radius: var(--rb-border-radius-sm);
  padding: var(--rb-space-2) var(--rb-space-4);
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border 0.15s;
  outline: none;
  user-select: none;

  /* Generalized variant selectors */
  &[data-variant*='primary'] {
    --btn-bg: var(--rb-colors-primary-fulvous);
    --btn-bg-hover: var(--rb-colors-primary-carrot-orange);
    --btn-bg-active: var(--rb-colors-primary-hunyadi);
    --btn-fg: var(--rb-colors-on-primary-fulvous);
    --btn-border: var(--rb-colors-primary-fulvous);
  }
  &[data-variant*='surface'] {
    --btn-bg: var(--rb-colors-surface-ash-gray);
    --btn-bg-hover: var(--rb-colors-surface-honeydew);
    --btn-bg-active: var(--rb-colors-surface-mid);
    --btn-fg: var(--rb-colors-on-surface-ash-gray);
    --btn-border: var(--rb-colors-border-subtle);
  }
  &[data-variant*='danger'] {
    --btn-bg: var(--rb-colors-surface-danger);
    --btn-bg-hover: var(--rb-colors-surface-danger);
    --btn-bg-active: var(--rb-colors-surface-danger);
    --btn-fg: var(--rb-colors-on-surface-danger);
    --btn-border: var(--rb-colors-surface-danger);
  }
  &[data-variant*='success'] {
    --btn-bg: var(--rb-colors-surface-success);
    --btn-bg-hover: var(--rb-colors-surface-success);
    --btn-bg-active: var(--rb-colors-surface-success);
    --btn-fg: var(--rb-colors-on-surface-success);
    --btn-border: var(--rb-colors-surface-success);
  }
  &[data-variant*='info'] {
    --btn-bg: var(--rb-colors-surface-info);
    --btn-bg-hover: var(--rb-colors-surface-info);
    --btn-bg-active: var(--rb-colors-surface-info);
    --btn-fg: var(--rb-colors-on-surface-info);
    --btn-border: var(--rb-colors-surface-info);
  }
  &[data-variant*='warning'] {
    --btn-bg: var(--rb-colors-surface-warning);
    --btn-bg-hover: var(--rb-colors-surface-warning);
    --btn-bg-active: var(--rb-colors-surface-warning);
    --btn-fg: var(--rb-colors-on-surface-warning);
    --btn-border: var(--rb-colors-surface-warning);
  }

  /* Filled (default) */
  &[data-variant]:not([data-variant$='outline']):not([data-variant$='ghost']) {
    background: var(--btn-bg);
    color: var(--btn-fg);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--btn-bg-hover);
      color: var(--btn-fg);
    }
    &:active:not(:disabled) {
      background: var(--btn-bg-active);
      color: var(--btn-fg);
    }
  }
  /* Outline */
  &[data-variant$='outline'] {
    background: transparent;
    color: var(--btn-border);
    outline: 1px solid var(--btn-border);
    outline-offset: -2px;
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--btn-bg-hover);
      color: var(--btn-fg);
      outline-color: var(--btn-bg-hover);
    }
    &:active:not(:disabled) {
      background: var(--btn-bg-active);
      color: var(--btn-fg);
      outline-color: var(--btn-bg-active);
    }
  }
  /* Ghost */
  &[data-variant$='ghost'] {
    background: transparent;
    color: var(--btn-border);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--btn-bg-hover);
      color: var(--btn-fg);
    }
    &:active:not(:disabled) {
      background: var(--btn-bg-active);
      color: var(--btn-fg);
    }
  }

  /* Disabled state: use design system disabled tokens */
  &:disabled {
    background: var(--rb-colors-disabled-bg) !important;
    color: var(--rb-colors-disabled-fg) !important;
    border-color: var(--rb-colors-disabled-border) !important;
    cursor: not-allowed;
    opacity: 1;
  }

  /* Size variants */
  &[data-size='sm'] {
    font-size: var(--rb-font-size-sm);
    padding: var(--rb-space-1) var(--rb-space-2);
    gap: var(--rb-space-1);
    min-height: 28px;
    min-width: 28px;
  }
  &[data-size='md'] {
    font-size: var(--rb-font-size-md);
    padding: var(--rb-space-2) var(--rb-space-4);
    gap: var(--rb-space-2);
    min-height: 36px;
    min-width: 36px;
  }
  &[data-size='lg'] {
    font-size: var(--rb-font-size-lg);
    padding: var(--rb-space-3) var(--rb-space-5);
    gap: var(--rb-space-2);
    min-height: 44px;
    min-width: 44px;
  }
`;

export const LoaderIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  animation: rb-spin 1s linear infinite;
  @keyframes rb-spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
