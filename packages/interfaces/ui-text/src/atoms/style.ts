import { css } from '@linaria/core';

export const elText = css`
  font-family: var(--components-text-font-family);
  color: var(--components-text-color);
  margin: 0;

  /* Specific element styling */
  &:where(h1) {
    font-size: var(--components-text-font-size-h1);
    line-height: var(--components-text-line-height-h1);
    font-weight: var(--components-text-font-weight-h1);
    margin: var(--components-text-margin-h1);
  }

  &:where(h2) {
    font-size: var(--components-text-font-size-h2);
    line-height: var(--components-text-line-height-h2);
    font-weight: var(--components-text-font-weight-h2);
    margin: var(--components-text-margin-h2);
  }

  &:where(h3) {
    font-size: var(--components-text-font-size-h3);
    line-height: var(--components-text-line-height-h3);
    font-weight: var(--components-text-font-weight-h3);
    margin: var(--components-text-margin-h3);
  }

  &:where(h4) {
    font-size: var(--components-text-font-size-h4);
    line-height: var(--components-text-line-height-h4);
    font-weight: var(--components-text-font-weight-h4);
    margin: var(--components-text-margin-h4);
  }

  &:where(h5) {
    font-size: var(--components-text-font-size-h5);
    line-height: var(--components-text-line-height-h5);
    font-weight: var(--components-text-font-weight-h5);
    margin: var(--components-text-margin-h5);
  }

  &:where(h6) {
    font-size: var(--components-text-font-size-h6);
    line-height: var(--components-text-line-height-h6);
    font-weight: var(--components-text-font-weight-h6);
    margin: var(--components-text-margin-h6);
  }

  &:where(p) {
    font-size: var(--components-text-font-size-p);
    line-height: var(--components-text-line-height-p);
    font-weight: var(--components-text-font-weight-p);
    margin: var(--components-text-margin-p);
  }

  &:where(span) {
    font-size: var(--components-text-font-size-span);
    line-height: var(--components-text-line-height-span);
    font-weight: var(--components-text-font-weight-span);
    display: inline;
  }

  &:where(label) {
    font-size: var(--components-text-font-size-label);
    line-height: var(--components-text-line-height-label);
    font-weight: var(--components-text-font-weight-label);
    display: inline-block;
  }

  &:where(small) {
    font-size: var(--components-text-font-size-small);
    line-height: var(--components-text-line-height-small);
    font-weight: var(--components-text-font-weight-small);
    display: inline-block;
  }
`;
