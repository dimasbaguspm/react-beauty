import { styled } from '@linaria/react';

export const ElTooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ElTooltipContent = styled.div`
  position: absolute;
  z-index: var(--components-tooltip-z-index, 1000);
  background-color: var(--components-tooltip-background-color, #000000);
  color: var(--components-tooltip-text-color, #ffffff);
  border-radius: var(--components-tooltip-border-radius, 8px);
  padding: var(--components-tooltip-padding-y, 4px)
    var(--components-tooltip-padding-x, 8px);
  font-size: var(--components-tooltip-font-size, 12px);
  font-weight: var(--components-tooltip-font-weight, 500);
  line-height: var(--components-tooltip-line-height, 16px);
  max-width: var(--components-tooltip-max-width, 280px);
  box-shadow: var(--components-tooltip-shadow, 1px 1px 2px rgba(0, 0, 0, 0.1));
  text-align: center;
  white-space: nowrap;
  opacity: 1;

  &[data-placement='right'] {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent
        var(--components-tooltip-background-color, #000000) transparent
        transparent;
    }
  }

  &[data-placement='left'] {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent transparent
        var(--components-tooltip-background-color, #000000);
    }
  }

  &[data-placement='top'] {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: var(--components-tooltip-background-color, #000000)
        transparent transparent transparent;
    }
  }

  &[data-placement='bottom'] {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent
        var(--components-tooltip-background-color, #000000) transparent;
    }
  }

  &[data-placement='center-top'] {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: var(--components-tooltip-background-color, #000000)
        transparent transparent transparent;
    }
  }

  &[data-placement='center-bottom'] {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent
        var(--components-tooltip-background-color, #000000) transparent;
    }
  }

  &[data-pointer='false'] {
    &::before {
      display: none;
    }
  }

  &[data-shadow='false'] {
    box-shadow: none;
  }
`;

export const ElTooltipTrigger = styled.div`
  display: inline-flex;
  align-items: center;
`;
