import { styled } from '@linaria/react';

export const ElRadioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--components-radio-gap);
  position: relative;
  width: 100%;
`;

export const ElRadioLabel = styled.label`
  font-size: var(--components-radio-font-size-label);
  line-height: var(--components-radio-line-height-label);
  font-weight: var(--components-radio-font-weight-label);
  color: var(--components-radio-colors-label);
  cursor: pointer;
  margin-left: 8px;

  &[data-disabled='true'] {
    opacity: 0.32;
    cursor: not-allowed;
  }
`;

export const ElRadioCircle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--components-radio-size);
  height: var(--components-radio-size);
  border-radius: 50%;
  border: 2px solid var(--components-radio-colors-border-unchecked);
  transition: border-color var(--components-radio-transition-duration)
    var(--components-radio-transition-timing);
  background-color: var(--components-radio-colors-background-unchecked);

  &::after {
    content: '';
    position: absolute;
    width: calc(var(--components-radio-size) / 2);
    height: calc(var(--components-radio-size) / 2);
    border-radius: 50%;
    background-color: var(--components-radio-colors-dot);
    transform: scale(0);
    transition: transform var(--components-radio-transition-duration)
      var(--components-radio-transition-timing);
  }

  [data-checked='true'] & {
    border-color: var(--components-radio-colors-border-checked);

    &::after {
      transform: scale(1);
    }
  }

  &[data-disabled='true'] {
    opacity: 0.32;
    cursor: not-allowed;
    border-color: var(--components-radio-colors-border-disabled);
  }
`;

export const ElRadioInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;

  &:focus-visible + ${ElRadioCircle} {
    outline: 2px solid var(--components-radio-colors-focus-ring);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ElRadioHelperText = styled.span`
  font-size: var(--components-radio-font-size-helper);
  line-height: var(--components-radio-line-height-helper);
  color: var(--components-radio-colors-helper-text-normal);
  padding: var(--space-none) var(--space-3);
  flex-basis: 100%;
  margin-top: calc(var(--components-radio-gap) / 2);

  &[data-error='true'] {
    color: var(--components-radio-colors-helper-text-error);
  }

  &[data-disabled='true'] {
    opacity: 0.32;
  }
`;

export const ElRadioWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;

export const ElRadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--components-radio-group-gap);
`;
