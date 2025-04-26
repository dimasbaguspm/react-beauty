import { styled } from '@linaria/react';

export const PaginationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--components-pagination-gap);

  &[data-disabled='true'] {
    opacity: var(--components-pagination-disabled-opacity-container);
    pointer-events: none;
  }
`;

export const PaginationItem = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--components-pagination-item-size-md);
  height: var(--components-pagination-item-size-md);
  font-size: var(--components-pagination-font-size-md);
  line-height: var(--components-pagination-font-line-height-md);
  font-weight: var(--components-pagination-font-weight);
  border-radius: var(--components-pagination-border-radius);
  background-color: transparent;
  color: var(--components-pagination-colors-text);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &[data-size='sm'] {
    width: var(--components-pagination-item-size-sm);
    height: var(--components-pagination-item-size-sm);
    font-size: var(--components-pagination-font-size-sm);
    line-height: var(--components-pagination-font-line-height-sm);
  }

  &:hover:not([data-active='true']) {
    background-color: var(--components-pagination-colors-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--components-pagination-colors-focus-outline);
    outline-offset: 1px;
  }

  &[data-active='true'] {
    background-color: var(--components-pagination-colors-active-background);
    color: var(--components-pagination-colors-active-text);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--components-pagination-disabled-opacity-item);
  }
`;

export const PaginationNavItem = styled(PaginationItem)`
  &:disabled {
    opacity: var(--components-pagination-disabled-opacity-nav-item);
  }
`;
