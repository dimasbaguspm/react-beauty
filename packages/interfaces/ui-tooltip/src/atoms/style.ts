import { styled } from '@linaria/react';

export const ElTooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ElTooltipContent = styled.div`
  position: absolute;
  z-index: var(--components-tooltip-z-index, 1000);
  background-color: var(--colors-main-gohan);
  color: var(--colors-main-bulma);
  border-radius: var(--components-tooltip-border-radius, 8px);
  padding: var(--space-3);

  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-regular);
  line-height: var(--font-line-height-xs);
  max-width: var(--components-tooltip-max-width, 280px);
  box-shadow: var(--components-tooltip-shadow, 1px 1px 2px rgba(0, 0, 0, 0.2));
  text-align: center;
  white-space: nowrap;
  opacity: 1;

  &[data-placement='top-left'] {
    bottom: 150%;
    left: 20%;
    transform: translateX(-75%);

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      right: 20%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: var(--colors-main-gohan) transparent transparent transparent;
    }
  }

  &[data-placement='top-center'] {
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: var(--colors-main-gohan) transparent transparent transparent;
    }
  }

  &[data-placement='top-right'] {
    bottom: 150%;
    right: 20%;
    transform: translateX(75%);

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 20%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: var(--colors-main-gohan) transparent transparent transparent;
    }
  }

  &[data-placement='right-top'] {
    left: 115%;
    top: -50%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 75%;
      right: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent var(--colors-main-gohan) transparent transparent;
    }
  }

  &[data-placement='right-center'] {
    left: 115%;
    top: 50%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent var(--colors-main-gohan) transparent transparent;
    }
  }

  &[data-placement='right-bottom'] {
    left: 115%;
    top: 150%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 25%;
      right: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent var(--colors-main-gohan) transparent transparent;
    }
  }

  &[data-placement='left-top'] {
    right: 115%;
    top: -50%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 75%;
      left: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent transparent var(--colors-main-gohan);
    }
  }

  &[data-placement='left-center'] {
    right: 115%;
    top: 50%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent transparent var(--colors-main-gohan);
    }
  }

  &[data-placement='left-bottom'] {
    right: 115%;
    top: 150%;
    transform: translateY(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 25%;
      left: 100%;
      margin-top: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent transparent var(--colors-main-gohan);
    }
  }

  &[data-placement='bottom-left'] {
    top: 150%;
    left: 20%;
    transform: translateX(-75%);

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      right: 20%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent var(--colors-main-gohan) transparent;
    }
  }

  &[data-placement='bottom-center'] {
    top: 150%;
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent var(--colors-main-gohan) transparent;
    }
  }

  &[data-placement='bottom-right'] {
    top: 150%;
    right: 20%;
    transform: translateX(75%);

    &::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 20%;
      margin-left: calc(var(--components-tooltip-pointer-size, 6px) * -1);
      border-width: var(--components-tooltip-pointer-size, 6px);
      border-style: solid;
      border-color: transparent transparent var(--colors-main-gohan) transparent;
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
  width: 100%;
`;
