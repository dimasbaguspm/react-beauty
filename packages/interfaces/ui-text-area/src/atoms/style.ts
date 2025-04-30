import { styled } from '@linaria/react';

const layout = `
  display: flex;
  flex-direction: column;
`;

export const ElTextAreaContainer = styled.div`
  ${layout}
  position: relative;
  gap: var(--components-text-area-gap);
  width: 100%;
`;

export const ElTextAreaLabel = styled.label`
  font-size: var(--components-text-area-font-size-label);
  line-height: var(--components-text-area-line-height-label);
  font-weight: var(--components-text-area-font-weight-label);
  color: var(--components-text-area-colors-label);
`;

export const ElTextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--components-text-area-colors-background-rest);
  padding: var(--space-1) var(--space-2);
  outline: solid;
  outline-width: 1px;
  outline-color: var(--components-text-area-colors-background-outline);
  border-radius: var(--components-text-area-border-radius);

  &[data-error='true'] {
    outline-color: var(--components-text-area-colors-border-error);
  }

  &[data-is-focused='true'] {
    outline-color: var(--components-text-area-colors-border-focus);
    box-shadow: 0 0 0 4px
      color-mix(
        in srgb,
        var(--components-text-area-colors-border-focus),
        transparent
      );
  }

  &[data-disabled='true'] {
    opacity: 0.32;
  }
`;

export const ElTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  resize: vertical;
  font-size: var(--components-text-area-font-size-input);
  line-height: var(--components-text-area-line-height-input);
  font-weight: var(--components-text-area-font-weight-input);
  color: var(--components-text-area-colors-input-text);
  border: none;
  background: none;
  font-family: inherit;

  &::placeholder {
    color: var(--components-text-area-colors-placeholder);
  }

  &:hover:not(:disabled) {
    border-color: var(--components-text-area-colors-border-hover);
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ElTextAreaHelperText = styled.p`
  font-size: var(--components-text-area-font-size-helper);
  line-height: var(--components-text-area-line-height-helper);
  color: var(--components-text-area-colors-helper-text-normal);
  padding: var(--space-none) var(--space-3);
  margin: 0;

  &[data-error='true'] {
    color: var(--components-text-area-colors-helper-text-error);
  }
`;
