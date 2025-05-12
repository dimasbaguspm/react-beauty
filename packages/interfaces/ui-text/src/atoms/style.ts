import { styled } from '@linaria/react';

type TextElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'label'
  | 'small';

interface TextProps {
  as?: TextElement;
}

export const ElText = styled.div<TextProps>`
  font-family: var(--components-text-font-family);
  color: var(--components-text-color);
  margin: 0;

  &[data-element='h1'] {
    font-size: var(--components-text-font-size-h1);
    line-height: var(--components-text-line-height-h1);
    font-weight: var(--components-text-font-weight-h1);
    margin: var(--components-text-margin-h1);
  }

  &[data-element='h2'] {
    font-size: var(--components-text-font-size-h2);
    line-height: var(--components-text-line-height-h2);
    font-weight: var(--components-text-font-weight-h2);
    margin: var(--components-text-margin-h2);
  }

  &[data-element='h3'] {
    font-size: var(--components-text-font-size-h3);
    line-height: var(--components-text-line-height-h3);
    font-weight: var(--components-text-font-weight-h3);
    margin: var(--components-text-margin-h3);
  }

  &[data-element='h4'] {
    font-size: var(--components-text-font-size-h4);
    line-height: var(--components-text-line-height-h4);
    font-weight: var(--components-text-font-weight-h4);
    margin: var(--components-text-margin-h4);
  }

  &[data-element='h5'] {
    font-size: var(--components-text-font-size-h5);
    line-height: var(--components-text-line-height-h5);
    font-weight: var(--components-text-font-weight-h5);
    margin: var(--components-text-margin-h5);
  }

  &[data-element='h6'] {
    font-size: var(--components-text-font-size-h6);
    line-height: var(--components-text-line-height-h6);
    font-weight: var(--components-text-font-weight-h6);
    margin: var(--components-text-margin-h6);
  }

  &[data-element='p'] {
    font-size: var(--components-text-font-size-p);
    line-height: var(--components-text-line-height-p);
    font-weight: var(--components-text-font-weight-p);
    margin: var(--components-text-margin-p);
  }

  &[data-element='span'] {
    font-size: var(--components-text-font-size-span);
    line-height: var(--components-text-line-height-span);
    font-weight: var(--components-text-font-weight-span);
    display: inline;
  }

  &[data-element='label'] {
    font-size: var(--components-text-font-size-label);
    line-height: var(--components-text-line-height-label);
    font-weight: var(--components-text-font-weight-label);
    display: inline-block;
  }

  &[data-element='small'] {
    font-size: var(--components-text-font-size-small);
    line-height: var(--components-text-line-height-small);
    font-weight: var(--components-text-font-weight-small);
    display: inline-block;
  }
`;
