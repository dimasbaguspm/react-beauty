import { styled } from '@linaria/react';

const layout = `
  display: flex;
  flex-direction: column;
`;

export const ElTextInputContainer = styled.div`
  ${layout}
  position: relative;
  gap: var(--components-text-input-gap);
  width: 100%;
`;

export const ElTextInputLabel = styled.label`
  font-size: var(--components-text-input-font-size-label);
  line-height: var(--components-text-input-line-height-label);
  font-weight: var(--components-text-input-font-weight-label);
  color: var(--components-text-input-colors-label);
`;

export const ElTextInputWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--components-text-input-colors-background-rest);
  padding: var(--space-1) var(--space-2);
  outline: solid;
  outline-width: 1px;
  outline-color: var(--components-text-input-colors-background-outline);
  border-radius: var(--components-text-input-border-radius);

  &[data-error='true'] {
    outline-color: var(--components-text-input-colors-border-error);
  }

  &[data-is-focused='true'] {
    outline-color: var(--components-text-input-colors-border-focus);
    box-shadow: 0 0 0 4px
      color-mix(
        in srgb,
        var(--components-text-input-colors-border-focus),
        transparent
      );
  }

  &[data-disabled='true'] {
    opacity: 0.32;
  }
`;

export const ElTextInput = styled.input`
  width: 100%;
  font-size: var(--components-text-input-font-size-input);
  line-height: var(--components-text-input-line-height-input);
  font-weight: var(--components-text-input-font-weight-input);
  color: var(--components-text-input-colors-input-text);
  border: none;
  background: none;

  &::placeholder {
    color: var(--components-text-input-colors-placeholder);
  }

  &:hover:not(:disabled) {
    border-color: var(--components-text-input-colors-border-hover);
  }

  &:focus-within {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &[data-has-lead-element='true'] {
    padding-left: 25px;
  }

  &[data-has-trail-element='true'] {
    padding-right: 25px;
  }
`;

export const ElTextInputHelperText = styled.span`
  font-size: var(--components-text-input-font-size-helper);
  line-height: var(--components-text-input-line-height-helper);
  color: var(--components-text-input-colors-helper-text-normal);
  padding: var(--space-none) var(--space-3);

  &[data-error='true'] {
    color: var(--components-text-input-colors-helper-text-error);
  }
`;

export const ElTextInputLeadElement = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;

export const ElTextInputTrailElement = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;
