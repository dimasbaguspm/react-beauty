import { styled } from '@linaria/react';

export const ElBottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--components-bottom-sheet-overlay-bg);
  z-index: var(--components-bottom-sheet-z-index);
  opacity: 0;
  transition: opacity var(--components-bottom-sheet-transition-duration)
    var(--components-bottom-sheet-transition-timing);
  /* Hide overlay by default */
  visibility: hidden;
  pointer-events: none;
  will-change: opacity, visibility;

  &[data-is-open='true'] {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`;

export const ElBottomSheetContainer = styled.dialog`
  position: fixed;
  z-index: calc(var(--components-bottom-sheet-z-index) + 1);
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  max-height: 100vh;
  height: 100vh;
  will-change: opacity;
  backface-visibility: hidden;

  /* Remove default dialog styling */
  &::backdrop {
    display: none;
  }

  /* Allow transitions to work even when dialog is closing */
  &:not([open]) {
    /* Instead of display: none which can't be transitioned */
    opacity: 0;
    pointer-events: none;
  }

  /* Styling for when the dialog is open */
  &[open] {
    opacity: 1;
  }
`;

export const ElBottomSheetWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--components-bottom-sheet-background);
  border-top-left-radius: var(--components-bottom-sheet-border-radius-top);
  border-top-right-radius: var(--components-bottom-sheet-border-radius-top);
  max-height: 90vh; /* Prevent sheet from being taller than the viewport */
  display: flex;
  flex-direction: column;
  width: 100%;
  transform: translateY(
    100%
  ); /* Position initially at the bottom (out of view) */
  will-change: transform, height;
  backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  /* Common transitions */
  transition:
    transform var(--components-bottom-sheet-transition-duration)
      var(--components-bottom-sheet-transition-timing),
    height var(--components-bottom-sheet-transition-duration)
      var(--components-bottom-sheet-transition-timing);

  /* Styling for when the wrapper is shown */
  &[data-is-open='true'] {
    transform: translateY(0); /* Move up into view when open */
  }

  /* Apply shadow when shadow is enabled */
  &[data-has-shadow='true'] {
    box-shadow: var(--components-bottom-sheet-shadow);
  }

  /* Height settings based on size */
  &[data-height='sm'] {
    height: var(--components-bottom-sheet-size-sm);
  }

  &[data-height='md'] {
    height: var(--components-bottom-sheet-size-md);
  }

  &[data-height='lg'] {
    height: var(--components-bottom-sheet-size-lg);
  }
`;

export const ElBottomSheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--components-bottom-sheet-padding);
  border-bottom: 1px solid var(--components-bottom-sheet-border-color);
  will-change: opacity;
  opacity: 0;
  transition: opacity var(--components-bottom-sheet-transition-content);

  [data-is-open='true'] & {
    opacity: 1;
  }
`;

export const ElBottomSheetBody = styled.div`
  flex: 1;
  padding: var(--components-bottom-sheet-padding);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  will-change: opacity;
  opacity: 0;
  transition: opacity var(--components-bottom-sheet-transition-content);

  [data-is-open='true'] & {
    opacity: 1;
  }
`;

export const ElBottomSheetFooter = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--components-bottom-sheet-padding);
  border-top: 1px solid var(--components-bottom-sheet-border-color);
  will-change: opacity;
  opacity: 0;
  transition: opacity var(--components-bottom-sheet-transition-content);

  [data-is-open='true'] & {
    opacity: 1;
  }
`;

export const ElBottomSheetCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--components-bottom-sheet-close-button-color);

  &:hover {
    color: var(--components-bottom-sheet-close-button-color-hover);
  }

  &:focus-visible {
    outline: 2px solid var(--components-bottom-sheet-focus-ring);
    outline-offset: 2px;
  }
`;

export const ElBottomSheetTitle = styled.h2`
  font-size: var(--components-bottom-sheet-title-font-size);
  line-height: var(--components-bottom-sheet-title-line-height);
  font-weight: var(--components-bottom-sheet-title-font-weight);
  color: var(--components-bottom-sheet-title-color);
  margin: 0;
`;
