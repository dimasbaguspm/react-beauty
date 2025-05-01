import { styled } from '@linaria/react';

export const ElSwitchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--components-switch-gap);
  position: relative;
  width: 100%;
`;

export const ElSwitchLabel = styled.label`
  font-size: var(--components-switch-font-size-label);
  line-height: var(--components-switch-line-height-label);
  font-weight: var(--components-switch-font-weight-label);
  color: var(--components-switch-colors-label);
  cursor: pointer;

  &[data-disabled='true'] {
    opacity: 0.32;
    cursor: not-allowed;
  }
`;

export const ElSwitchTrack = styled.div`
  position: relative;
  width: var(--components-switch-width);
  height: var(--components-switch-height);
  background-color: var(--components-switch-colors-track-unchecked);
  border-radius: var(--components-switch-border-radius);
  transition: background-color var(--components-switch-transition-duration)
    var(--components-switch-transition-timing);

  &[data-checked='true'] {
    background-color: var(--components-switch-colors-track-checked);
  }

  &[data-disabled='true'] {
    opacity: 0.32;
    cursor: not-allowed;
  }

  &[data-checked='false'][data-disabled='true'] {
    background-color: var(--components-switch-colors-track-disabled);
  }
`;

export const ElSwitchThumb = styled.div`
  position: absolute;
  top: var(--components-switch-thumb-margin);
  left: var(--components-switch-thumb-margin);
  width: var(--components-switch-thumb-size);
  height: var(--components-switch-thumb-size);
  background-color: var(--components-switch-colors-thumb-unchecked);
  border-radius: 50%;
  transition: transform var(--components-switch-transition-duration)
    var(--components-switch-transition-timing);

  [data-checked='true'] & {
    transform: translateX(
      calc(
        var(--components-switch-width) - var(--components-switch-thumb-size) -
          2 * var(--components-switch-thumb-margin)
      )
    );
    background-color: var(--components-switch-colors-thumb-checked);
  }
`;

export const ElSwitchInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;

  &:focus-visible + ${ElSwitchTrack} {
    outline: 2px solid var(--components-switch-colors-focus-ring);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const ElSwitchHelperText = styled.span`
  font-size: var(--components-switch-font-size-helper);
  line-height: var(--components-switch-line-height-helper);
  color: var(--components-switch-colors-helper-text-normal);
  padding: var(--space-none) var(--space-3);
  flex-basis: 100%;
  margin-top: calc(var(--components-switch-gap) / 2);

  &[data-error='true'] {
    color: var(--components-switch-colors-helper-text-error);
  }

  &[data-disabled='true'] {
    opacity: 0.32;
  }
`;

export const ElSwitchWrapper = styled.div`
  position: relative;
  display: inline-block;

  &[data-disabled='true'] {
    cursor: not-allowed;
  }
`;
