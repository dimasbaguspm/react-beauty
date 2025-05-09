import { styled } from '@linaria/react';

const layout = `
  display: flex;
  flex-direction: column;
`;

export const ElSelectContainer = styled.div`
  ${layout}
  position: relative;
  gap: var(--components-select-gap);
  width: 100%;
`;

export const ElSelectLabel = styled.label`
  font-size: var(--components-select-font-size-label);
  line-height: var(--components-select-line-height-label);
  font-weight: var(--components-select-font-weight-label);
  color: var(--components-select-colors-label);
`;

export const ElSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--components-select-colors-background-rest);
  padding: var(--space-1) var(--space-2);
  outline: solid;
  outline-width: 1px;
  outline-color: var(--components-select-colors-background-outline);
  border-radius: var(--components-select-border-radius);

  &[data-error='true'] {
    outline-color: var(--components-select-colors-border-error);
  }

  &[data-is-focused='true'] {
    outline-color: var(--components-select-colors-border-focus);
    box-shadow: 0 0 0 4px
      color-mix(
        in srgb,
        var(--components-select-colors-border-focus),
        transparent
      );
  }

  &:hover:not([data-disabled='true']) {
    outline-color: var(
      --components-select-colors-border-hover,
      var(--components-select-colors-border-focus)
    );
  }

  &[data-disabled='true'] {
    opacity: 0.32;
  }
`;

export const ElSelect = styled.select`
  width: 100%;
  font-size: var(--components-select-font-size-input);
  line-height: var(--components-select-line-height-input);
  font-weight: var(--components-select-font-weight-input);
  color: var(--components-select-colors-input-text);
  border: none;
  background: none;
  appearance: none;
  cursor: pointer;

  &::placeholder {
    color: var(--components-select-colors-placeholder);
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
`;

export const ElSelectOption = styled.option`
  font-size: var(--components-select-font-size-option);
  line-height: var(--components-select-line-height-option);
  font-weight: var(--components-select-font-weight-option);
  padding: var(--space-2);
`;

export const ElSelectHelperText = styled.span`
  font-size: var(--components-select-font-size-helper);
  line-height: var(--components-select-line-height-helper);
  color: var(--components-select-colors-helper-text-normal);
  padding: var(--space-none) var(--space-3);

  &[data-error='true'] {
    color: var(--components-select-colors-helper-text-error);
  }
`;

export const ElSelectLeadElement = styled.div`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  pointer-events: none;
`;

export const ElSelectTrailElement = styled.div`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  pointer-events: none;

  /* Default arrow icon */
  &:empty::before {
    content: '';
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid currentColor;
  }
`;
