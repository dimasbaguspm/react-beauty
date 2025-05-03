import { styled } from '@linaria/react';

export const ElDrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--components-drawer-overlay-bg);
  z-index: var(--components-drawer-z-index);
  opacity: 0;
  transition: opacity var(--components-drawer-transition-duration)
    var(--components-drawer-transition-timing);
  /* Hide overlay by default */
  visibility: hidden;
  pointer-events: none;

  &[data-is-open='true'] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

export const ElDrawerContainer = styled.dialog`
  position: fixed;
  z-index: calc(var(--components-drawer-z-index) + 1);
  background-color: var(--components-drawer-background);
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;

  /* Remove default dialog styling */
  &::backdrop {
    display: none;
  }

  /* Common transitions for all directions */
  transition:
    width var(--components-drawer-transition-duration)
      var(--components-drawer-transition-timing),
    height var(--components-drawer-transition-duration)
      var(--components-drawer-transition-timing),
    opacity var(--components-drawer-transition-duration)
      var(--components-drawer-transition-timing);

  /* Allow transitions to work even when dialog is closing */
  &:not([open]) {
    /* Instead of display: none which can't be transitioned */
    opacity: 0;
    pointer-events: none;
  }

  &[data-direction='right'],
  &[data-direction='left'] {
    top: 0;
    bottom: 0;
    height: 100%;
    overflow: hidden;
    /* Initial width state - collapsed */
    width: 0;
  }

  /* Direction-specific positioning */
  &[data-direction='right'] {
    right: 0;
    left: auto;
    border-top-left-radius: var(--components-drawer-border-radius-left);
    border-bottom-left-radius: var(--components-drawer-border-radius-left);
  }

  &[data-direction='left'] {
    left: 0;
    right: auto;
    border-top-right-radius: var(--components-drawer-border-radius-right);
    border-bottom-right-radius: var(--components-drawer-border-radius-right);
  }

  /* Width/height settings when open */
  &[open] {
    opacity: 1;

    /* Handle horizontal drawers (left/right) */
    &[data-width='sm'] {
      width: var(--components-drawer-size-sm);
    }

    &[data-width='md'] {
      width: var(--components-drawer-size-md);
    }

    &[data-width='lg'] {
      width: var(--components-drawer-size-lg);
    }

    /* Special handling for top/bottom drawers */
    &[data-direction='top'],
    &[data-direction='bottom'] {
      &[data-width='sm'] {
        height: var(--components-drawer-size-sm);
      }

      &[data-width='md'] {
        height: var(--components-drawer-size-md);
      }

      &[data-width='lg'] {
        height: var(--components-drawer-size-lg);
      }
    }

    /* Apply shadow when open and shadow is enabled */
    &[data-has-shadow='true'] {
      box-shadow: var(--components-drawer-shadow);
    }
  }
`;

export const ElDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--components-drawer-padding);
  border-bottom: 1px solid var(--components-drawer-border-color);
`;

export const ElDrawerBody = styled.div`
  flex: 1;
  padding: var(--components-drawer-padding);
  overflow-y: auto;
`;

export const ElDrawerFooter = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--components-drawer-padding);
  border-top: 1px solid var(--components-drawer-border-color);
`;

export const ElDrawerCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--components-drawer-close-button-color);

  &:hover {
    color: var(--components-drawer-close-button-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--components-drawer-focus-ring);
    outline-offset: 2px;
  }
`;

export const ElDrawerTitle = styled.h2`
  font-size: var(--components-drawer-title-font-size);
  line-height: var(--components-drawer-title-line-height);
  font-weight: var(--components-drawer-title-font-weight);
  color: var(--components-drawer-title-color);
`;
