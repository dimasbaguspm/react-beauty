import { styled } from '@linaria/react';

export const ElCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--components-checkbox-gap);
  position: relative;
  width: 100%;
`;

export const ElCheckboxLabel = styled.label`
  font-size: var(--components-checkbox-font-size-label);
  line-height: var(--components-checkbox-line-height-label);
  font-weight: var(--components-checkbox-font-weight-label);
  color: var(--components-checkbox-colors-label);
  cursor: pointer;
  margin-left: 8px;

  &[data-disabled='true'] {
    opacity: 0.32;
    cursor: not-allowed;
  }
`;

export const ElCheckboxBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--components-checkbox-size);
  height: var(--components-checkbox-size);
  border-radius: var(--components-checkbox-border-radius);
  border: 2px solid var(--components-checkbox-colors-border-unchecked);
  background-color: var(--components-checkbox-colors-background-unchecked);
  transition:
    border-color var(--components-checkbox-transition-duration)
      var(--components-checkbox-transition-timing),
    background-color var(--components-checkbox-transition-duration)
      var(--components-checkbox-transition-timing);
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 60%;
    border: solid var(--components-checkbox-colors-checkmark);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) scale(0);
    opacity: 0;
    transition:
      transform var(--components-checkbox-transition-duration)
        var(--components-checkbox-transition-timing),
      opacity var(--components-checkbox-transition-duration)
        var(--components-checkbox-transition-timing);
  }

  [data-checked='true'] & {
    border-color: var(--components-checkbox-colors-border-checked);
    background-color: var(--components-checkbox-colors-background-checked);

    &::after {
      transform: rotate(45deg) scale(1);
      opacity: 1;
    }
  }

  &[data-disabled='true'] {
    opacity: 0.32;
    cursor: not-allowed;
    border-color: var(--components-checkbox-colors-border-disabled);
  }
`;

export const ElCheckboxInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;

  &:focus-visible + ${ElCheckboxBox} {
    outline: 2px solid var(--components-checkbox-colors-focus-ring);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ElCheckboxHelperText = styled.span`
  font-size: var(--components-checkbox-font-size-helper);
  line-height: var(--components-checkbox-line-height-helper);
  color: var(--components-checkbox-colors-helper-text-normal);
  padding: var(--space-none) var(--space-3);
  flex-basis: 100%;
  margin-top: calc(var(--components-checkbox-gap) / 2);

  &[data-error='true'] {
    color: var(--components-checkbox-colors-helper-text-error);
  }

  &[data-disabled='true'] {
    opacity: 0.32;
  }
`;

export const ElCheckboxWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

export const ElCheckboxGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--components-checkbox-group-gap);
`;
