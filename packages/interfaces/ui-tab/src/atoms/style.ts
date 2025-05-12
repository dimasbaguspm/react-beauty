import { styled } from '@linaria/react';

export const ElTabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ElTabsList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--components-tab-gap);
  border-bottom: var(--components-tab-underline-height) solid
    var(--components-tab-underline-color);
  padding-bottom: 0;
  position: relative;

  &[data-type='pill'] {
    border-bottom: none;
    background-color: transparent;
  }

  &[data-type='ghost'] {
    border-bottom: none;
    background-color: transparent;
  }
`;

export const ElTabItem = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--components-tab-gap);
  padding: var(--components-tab-padding-y) var(--components-tab-padding-x);
  font-size: var(--components-tab-font-size);
  color: var(--components-tab-color);
  background-color: var(--components-tab-background);
  border: none;
  border-radius: var(--components-tab-border-radius);
  cursor: pointer;
  position: relative;
  transition: all var(--components-tab-transition-duration)
    var(--components-tab-transition-timing);
  height: var(--components-tab-height-default);

  &:hover {
    opacity: var(--components-tab-hover-opacity);
  }

  &:disabled {
    opacity: var(--components-tab-disabled-opacity);
    cursor: not-allowed;
  }

  /* Underline style */
  &[data-type='underline'] {
    background-color: transparent;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: var(--components-tab-underline-height);
      background-color: transparent;
      transition: background-color var(--components-tab-transition-duration)
        var(--components-tab-transition-timing);
    }

    &[data-active='true']::after {
      background-color: var(--components-tab-underline-active-color);
    }

    &[data-active='true'] {
      color: var(--components-tab-underline-active-color);
      opacity: var(--components-tab-active-opacity);
    }
  }

  /* Pill style */
  &[data-type='pill'] {
    color: var(--colors-main-trunks);

    &[data-active='true'] {
      background-color: var(--components-tab-pill-background-active);
      color: var(--components-tab-pill-text-active);
      opacity: var(--components-tab-active-opacity);
    }
  }

  /* Ghost style */
  &[data-type='ghost'] {
    background-color: transparent;

    &[data-active='true'] {
      color: var(--components-tab-ghost-text-active);
      border-bottom: none;
      opacity: var(--components-tab-active-opacity);
    }
  }
`;

export const ElTabItemLead = styled.span`
  display: flex;
  align-items: center;
`;

export const ElTabItemLabel = styled.span`
  flex: 1;
`;

export const ElTabItemTrail = styled.span`
  display: flex;
  align-items: center;
`;
