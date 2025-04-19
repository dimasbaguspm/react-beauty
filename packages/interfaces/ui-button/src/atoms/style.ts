import { styled } from "@linaria/react";

const fill = `
  background-color: var(--components-button-colors-fill-default-bg);
  color: var(--components-button-colors-fill-default-color);

  &:hover {
    background-color: color-mix(in srgb, var(--colors-main-picollo), var(--colors-main-bulma) 10%);
  }

  &:focus-within {
    box-shadow: 0 0 0 4px var(--components-button-colors-fill-focus-bs);
  }
 `;

const outline = `
  outline: solid;
  outline-color: var(--components-button-colors-outline-default-outline);
  outline-width: 1px;
  color: var(--components-button-colors-outline-default-color);
  background-color: transparent;

  &:hover {
    background-color: var(--components-button-colors-outline-hover-bg);
  }

  &:focus-within {
    box-shadow: 0 0 0 4px var(--components-button-colors-outline-focus-bs);
  }
`;

const ghost = `
  background-color: transparent;
  color: var(--components-button-colors-ghost-default-color);

  &:hover {
    color: var(--components-button-colors-ghost-hover-color);
    background-color: var(--components-button-colors-ghost-hover-bg);
  }

  &:focus-within {
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--colors-main-picollo) 20%, transparent);
  }
`;

const sizeXs = `
  border-radius: var(--components-button-border-radius-xs);
  padding: var(--components-button-padding-xs-y) var(--components-button-padding-xs-x);
  font-size: var(--components-button-font-size-xs);
  font-weight: var(--components-button-font-weight);
  line-height: var(--components-button-line-height-xs);

  &[data-is-only-icon="true"] {
    padding: var(--components-button-padding-xs-icon);
  }
`;

const sizeSm = `
  border-radius: var(--components-button-border-radius-sm);
  padding: var(--components-button-padding-sm-y) var(--components-button-padding-sm-x);
  font-size: var(--components-button-font-size-sm);
  font-weight: var(--components-button-font-weight);
  line-height: var(--components-button-line-height-sm);

  &[data-is-only-icon="true"] {
    padding: var(--components-button-padding-sm-icon);
  }
`;

const sizeMd = `
  border-radius: var(--components-button-border-radius-md);
  padding: var(--components-button-padding-md-y) var(--components-button-padding-md-x);
  font-size: var(--components-button-font-size-md);
  font-weight: var(--components-button-font-weight);
  line-height: var(--components-button-line-height-md);

  &[data-is-only-icon="true"] {
    padding: var(--components-button-padding-md-icon);
  }
`;

const sizeLg = `
  border-radius: var(--components-button-border-radius-lg);
  padding: var(--components-button-padding-lg-y) var(--components-button-padding-lg-x);
  font-size: var(--components-button-font-size-lg);
  font-weight: var(--components-button-font-weight);
  line-height: var(--components-button-line-height-lg);

  &[data-is-only-icon="true"] {
    padding: var(--components-button-padding-lg-icon);
  }
`;

const sizeXl = `
  border-radius: var(--components-button-border-radius-xl);
  padding: var(--components-button-padding-xl-y) var(--components-button-padding-xl-x);
  font-size: var(--components-button-font-size-xl);
  font-weight: var(--components-button-font-weight);
  line-height: var(--components-button-line-height-xl);

  &[data-is-only-icon="true"] {
    padding: var(--components-button-padding-xl-icon);
  }
`;

export const ElButton = styled.button`
  outline: none;
  border: none;
  background-color: unset;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--space-1);

  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 32%;
  }

  &[data-is-full-width] {
    width: 100%;
  }

  &[data-size="xs"] {
    ${sizeXs}
  }

  &[data-size="sm"] {
    ${sizeSm}
  }

  &[data-size="md"] {
    ${sizeMd}
  }

  &[data-size="lg"] {
    ${sizeLg}
  }

  &[data-size="xl"] {
    ${sizeXl}
  }

  &[data-variant="fill"] {
    ${fill}
  }

  &[data-variant="outline"] {
    ${outline}
  }

  &[data-variant="ghost"] {
    ${ghost}
  }
`;
