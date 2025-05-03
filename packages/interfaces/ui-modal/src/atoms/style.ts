import { styled } from '@linaria/react';

export const ElModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--components-modal-overlay-bg);
  z-index: var(--components-modal-z-index);
  opacity: 0;
  transition: opacity var(--components-modal-transition-duration)
    var(--components-modal-transition-timing);
  /* Hide overlay by default */
  visibility: hidden;
  pointer-events: none;

  &[data-is-open='true'] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

export const ElModalContainer = styled.dialog`
  position: fixed;
  z-index: calc(var(--components-modal-z-index) + 1);
  background-color: var(--components-modal-background);
  display: flex;
  flex-direction: column;
  border-radius: var(--components-modal-border-radius);
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  max-width: 90vw;
  max-height: 90vh;

  /* Remove default dialog styling */
  &::backdrop {
    display: none;
  }

  /* Common transitions */
  transition:
    opacity var(--components-modal-transition-duration)
      var(--components-modal-transition-timing),
    transform var(--components-modal-transition-duration)
      var(--components-modal-transition-timing);

  /* Center positioning with inset */
  inset: 0;
  margin: auto;

  &[data-width='sm'] {
    width: var(--components-modal-size-sm);
  }

  &[data-width='md'] {
    width: var(--components-modal-size-md);
  }

  &[data-width='lg'] {
    width: var(--components-modal-size-lg);
  }

  &[data-width='xl'] {
    width: var(--components-modal-size-xl);
  }

  /* Allow transitions to work even when dialog is closing */
  &:not([open]) {
    /* Instead of display: none which can't be transitioned */
    opacity: 0;
    pointer-events: none;
    transform: scale(0.9); /* Slightly smaller when closing */
  }

  /* Width sizes when open */
  &[open] {
    opacity: 1;
    transform: scale(1);

    /* Apply shadow when open and shadow is enabled */
    &[data-has-shadow='true'] {
      box-shadow: var(--components-modal-shadow);
    }
  }
`;

export const ElModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--components-modal-padding);
  border-bottom: 1px solid var(--components-modal-border-color);
`;

export const ElModalBody = styled.div`
  flex: 1;
  padding: var(--components-modal-padding);
  overflow-y: auto;
`;

export const ElModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-2);
  padding: var(--components-modal-padding);
  border-top: 1px solid var(--components-modal-border-color);
`;

export const ElModalCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--components-modal-close-button-color);

  &:hover {
    color: var(--components-modal-close-button-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--components-modal-focus-ring);
    outline-offset: 2px;
  }
`;

export const ElModalTitle = styled.h2`
  font-size: var(--components-modal-title-font-size);
  line-height: var(--components-modal-title-line-height);
  font-weight: var(--components-modal-title-font-weight);
  color: var(--components-modal-title-color);
  margin: 0;
`;
