import { styled } from '@linaria/react';

/**
 * IconButtonBase styled component using design system tokens.
 * All colors, spacing, and radii use CSS variables.
 */
export const IconButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* Use direct tokens for all backgrounds, borders, and colors */
  background: transparent;
  color: inherit;
  border: none;
  cursor: pointer;
  transition:
    background 0.15s,
    color 0.15s,
    border 0.15s;
  outline: none;
  user-select: none;
  position: relative;
  padding: 0;
  min-width: 0;
  min-height: 0;

  &[data-size='sm'] {
    width: 28px;
    height: 28px;
    font-size: var(--rb-font-size-sm);
    padding-left: var(--rb-space-1);
    padding-right: var(--rb-space-1);
    gap: var(--rb-space-1);
  }
  &[data-size='md'] {
    width: 36px;
    height: 36px;
    font-size: var(--rb-font-size-md);
    padding-left: var(--rb-space-2);
    padding-right: var(--rb-space-2);
    gap: var(--rb-space-1);
  }
  &[data-size='lg'] {
    width: 44px;
    height: 44px;
    font-size: var(--rb-font-size-lg);
    padding-left: var(--rb-space-3);
    padding-right: var(--rb-space-3);
    gap: var(--rb-space-1);
  }

  &[data-shape='rounded'] {
    border-radius: var(--rb-border-radius-rounded);
  }
  &[data-shape='semi-square'] {
    border-radius: var(--rb-border-radius-sm);
  }

  /* --- VARIANT STYLES --- */
  /* Primary (default) */
  &[data-variant='primary'] {
    background: var(--rb-colors-primary-fulvous);
    color: var(--rb-colors-on-primary-fulvous);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-primary-carrot-orange);
      color: var(--rb-colors-on-primary-fulvous);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-primary-hunyadi);
      color: var(--rb-colors-on-primary-fulvous);
    }
  }
  &[data-variant='primary-outline'] {
    background: transparent;
    color: var(--rb-colors-primary-fulvous);
    border: 1px solid var(--rb-colors-primary-fulvous);
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-primary-carrot-orange);
      color: var(--rb-colors-on-primary-fulvous);
      border-color: var(--rb-colors-primary-carrot-orange);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-primary-hunyadi);
      color: var(--rb-colors-on-primary-fulvous);
      border-color: var(--rb-colors-primary-hunyadi);
    }
  }
  &[data-variant='primary-ghost'] {
    background: transparent;
    color: var(--rb-colors-primary-fulvous);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-primary-carrot-orange);
      color: var(--rb-colors-on-primary-fulvous);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-primary-hunyadi);
      color: var(--rb-colors-on-primary-fulvous);
    }
  }
  &[data-variant='surface'] {
    background: var(--rb-colors-surface-ash-gray);
    color: var(--rb-colors-on-surface-ash-gray);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-honeydew);
      color: var(--rb-colors-on-surface-ash-gray);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-mid);
      color: var(--rb-colors-on-surface-ash-gray);
    }
  }
  &[data-variant='surface-outline'] {
    background: transparent;
    color: var(--rb-colors-border-subtle);
    border: 1px solid var(--rb-colors-border-subtle);
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-honeydew);
      color: var(--rb-colors-on-surface-ash-gray);
      border-color: var(--rb-colors-surface-honeydew);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-mid);
      color: var(--rb-colors-on-surface-ash-gray);
      border-color: var(--rb-colors-surface-mid);
    }
  }
  &[data-variant='surface-ghost'] {
    background: transparent;
    color: var(--rb-colors-border-subtle);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-honeydew);
      color: var(--rb-colors-on-surface-ash-gray);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-mid);
      color: var(--rb-colors-on-surface-ash-gray);
    }
  }
  &[data-variant='danger'] {
    background: var(--rb-colors-surface-danger);
    color: var(--rb-colors-on-surface-danger);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-danger);
      color: var(--rb-colors-on-surface-danger);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-danger);
      color: var(--rb-colors-on-surface-danger);
    }
  }
  &[data-variant='danger-outline'] {
    background: transparent;
    color: var(--rb-colors-surface-danger);
    border: 1px solid var(--rb-colors-surface-danger);
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-danger);
      color: var(--rb-colors-on-surface-danger);
      border-color: var(--rb-colors-surface-danger);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-danger);
      color: var(--rb-colors-on-surface-danger);
      border-color: var(--rb-colors-surface-danger);
    }
  }
  &[data-variant='danger-ghost'] {
    background: transparent;
    color: var(--rb-colors-surface-danger);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-danger);
      color: var(--rb-colors-on-surface-danger);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-danger);
      color: var(--rb-colors-on-surface-danger);
    }
  }
  &[data-variant='success'] {
    background: var(--rb-colors-surface-success);
    color: var(--rb-colors-on-surface-success);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-success);
      color: var(--rb-colors-on-surface-success);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-success);
      color: var(--rb-colors-on-surface-success);
    }
  }
  &[data-variant='success-outline'] {
    background: transparent;
    color: var(--rb-colors-surface-success);
    border: 1px solid var(--rb-colors-surface-success);
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-success);
      color: var(--rb-colors-on-surface-success);
      border-color: var(--rb-colors-surface-success);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-success);
      color: var(--rb-colors-on-surface-success);
      border-color: var(--rb-colors-surface-success);
    }
  }
  &[data-variant='success-ghost'] {
    background: transparent;
    color: var(--rb-colors-surface-success);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-success);
      color: var(--rb-colors-on-surface-success);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-success);
      color: var(--rb-colors-on-surface-success);
    }
  }
  &[data-variant='info'] {
    background: var(--rb-colors-surface-info);
    color: var(--rb-colors-on-surface-info);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-info);
      color: var(--rb-colors-on-surface-info);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-info);
      color: var(--rb-colors-on-surface-info);
    }
  }
  &[data-variant='info-outline'] {
    background: transparent;
    color: var(--rb-colors-surface-info);
    border: 1px solid var(--rb-colors-surface-info);
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-info);
      color: var(--rb-colors-on-surface-info);
      border-color: var(--rb-colors-surface-info);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-info);
      color: var(--rb-colors-on-surface-info);
      border-color: var(--rb-colors-surface-info);
    }
  }
  &[data-variant='info-ghost'] {
    background: transparent;
    color: var(--rb-colors-surface-info);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-info);
      color: var(--rb-colors-on-surface-info);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-info);
      color: var(--rb-colors-on-surface-info);
    }
  }
  &[data-variant='warning'] {
    background: var(--rb-colors-surface-warning);
    color: var(--rb-colors-on-surface-warning);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-warning);
      color: var(--rb-colors-on-surface-warning);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-warning);
      color: var(--rb-colors-on-surface-warning);
    }
  }
  &[data-variant='warning-outline'] {
    background: transparent;
    color: var(--rb-colors-surface-warning);
    border: 1px solid var(--rb-colors-surface-warning);
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-warning);
      color: var(--rb-colors-on-surface-warning);
      border-color: var(--rb-colors-surface-warning);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-warning);
      color: var(--rb-colors-on-surface-warning);
      border-color: var(--rb-colors-surface-warning);
    }
  }
  &[data-variant='warning-ghost'] {
    background: transparent;
    color: var(--rb-colors-surface-warning);
    border: none;
    &:hover:not(:disabled),
    &:focus-visible:not(:disabled) {
      background: var(--rb-colors-surface-warning);
      color: var(--rb-colors-on-surface-warning);
    }
    &:active:not(:disabled) {
      background: var(--rb-colors-surface-warning);
      color: var(--rb-colors-on-surface-warning);
    }
  }

  /* Disabled state */
  &:disabled {
    background: var(--rb-colors-disabled-bg) !important;
    color: var(--rb-colors-disabled-fg) !important;
    border-color: var(--rb-colors-disabled-border) !important;
    cursor: not-allowed;
    opacity: 1;
  }
  /* Loading state: visually indicate loading */
  &[aria-busy='true'] {
    pointer-events: none;
    opacity: 0.7;
  }
  /* Hover/focus/active states: always use correct color tokens for accessibility */
  &:hover:not(:disabled),
  &:focus-visible:not(:disabled) {
    outline: none;
    z-index: 1;
  }
  &:active:not(:disabled) {
    outline: none;
    z-index: 1;
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
