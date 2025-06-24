import { styled } from '@linaria/react';

/**
 * Semantic, design-token-driven styles for text variants, weights, and colors.
 * Uses only CSS variables from the design system.
 * Follows React Beauty Design System guidelines (see .github/instructions/designer.instructions.md)
 */

export const TextRoot = styled.span`
  margin: 0;
  padding: 0;
  color: var(--rb-colors-on-surface-ash-gray);
  font-size: var(--rb-font-size-md);
  font-weight: var(--rb-font-weight-md);
  font-family: var(--rb-font-family-base);
  line-height: var(--rb-line-height-md);
  letter-spacing: var(--rb-letter-spacing-md);
  background: none;
  border: none;
  box-shadow: none;
  overflow-wrap: break-word;

  // Variant styles
  &[data-variant='heading'] {
    font-size: var(--rb-font-size-3xl);
    font-weight: var(--rb-font-weight-3xl);
    line-height: var(--rb-line-height-3xl);
    letter-spacing: var(--rb-letter-spacing-3xl);
  }
  &[data-variant='subheading'] {
    font-size: var(--rb-font-size-xl);
    font-weight: var(--rb-font-weight-xl);
    line-height: var(--rb-line-height-xl);
    letter-spacing: var(--rb-letter-spacing-xl);
  }
  &[data-variant='body'] {
    font-size: var(--rb-font-size-md);
    font-weight: var(--rb-font-weight-md);
    line-height: var(--rb-line-height-md);
    letter-spacing: var(--rb-letter-spacing-md);
  }
  &[data-variant='caption'] {
    font-size: var(--rb-font-size-xs);
    font-weight: var(--rb-font-weight-xs);
    line-height: var(--rb-line-height-xs);
    letter-spacing: var(--rb-letter-spacing-xs);
  }
  &[data-variant='overline'] {
    font-size: var(--rb-font-size-micro);
    font-weight: var(--rb-font-weight-micro);
    line-height: var(--rb-line-height-micro);
    letter-spacing: var(--rb-letter-spacing-micro);
    text-transform: uppercase;
  }
  &[data-variant='code'] {
    font-family: var(--rb-font-family-mono);
    font-size: var(--rb-font-size-sm);
    font-weight: var(--rb-font-weight-md);
    line-height: var(--rb-line-height-sm);
    letter-spacing: var(--rb-letter-spacing-sm);
    background: var(--rb-colors-surface-honeydew);
    border-radius: var(--rb-border-radius-xs);
    padding: 0 var(--rb-space-1);
  }

  // Weight styles (overrides for explicit weight prop)
  &[data-weight='medium'] {
    font-weight: var(--rb-font-weight-lg);
  }
  &[data-weight='bold'] {
    font-weight: var(--rb-font-weight-xl);
  }
  &[data-weight='extrabold'] {
    font-weight: var(--rb-font-weight-2xl);
  }

  // Color intent styles
  &[data-color='primary'] {
    color: var(--rb-colors-on-primary-fulvous);
  }
  &[data-color='surface'] {
    color: var(--rb-colors-on-surface-ash-gray);
  }
  &[data-color='danger'] {
    color: var(--rb-colors-on-surface-danger);
  }
  &[data-color='warning'] {
    color: var(--rb-colors-on-surface-warning);
  }
  &[data-color='info'] {
    color: var(--rb-colors-on-surface-info);
  }
  &[data-color='success'] {
    color: var(--rb-colors-on-surface-success);
  }
  &[data-color='disabled'] {
    color: var(--rb-colors-disabled-fg);
    cursor: not-allowed;
    opacity: 1;
  }

  // Truncate (ellipsis) utility
  &[data-truncate='true'] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // Unselectable utility
  &[data-unselectable='true'] {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    pointer-events: none;
  }
`;
