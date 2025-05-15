import { styled } from '@linaria/react';

export const ElSegmentContainer = styled.div`
  display: flex;
  position: relative;
  background-color: var(--components-segment-background);
  border-radius: var(--components-segment-border-radius);
  padding: var(--components-segment-padding);
  gap: var(--components-segment-gap);
  box-sizing: border-box;
  width: fit-content;
`;

export const ElSegmentList = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--components-segment-gap);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ElSegmentItem = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--components-segment-border-radius);
  cursor: pointer;
  border: none;
  gap: var(--components-segment-gap);
  background-color: transparent;
  color: var(--components-segment-text-color);
  font-size: var(--components-segment-text-font-size);
  line-height: var(--components-segment-text-line-height);
  font-weight: var(--components-segment-text-font-weight);
  transition:
    background-color var(--components-segment-transition-duration)
      var(--components-segment-transition-timing),
    color var(--components-segment-transition-duration)
      var(--components-segment-transition-timing);

  &[data-active='true'] {
    background-color: var(--components-segment-background-active);
  }

  &[data-has-square-padding='true'] {
    padding: var(--space-1);
  }

  &:focus-visible {
    outline: 4px solid var(--components-segment-focus-ring);
  }
`;
