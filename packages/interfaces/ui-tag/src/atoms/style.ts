import { styled } from "@linaria/react";

const sizeSm = `
  padding-top: var(--components-tag-padding-sm-y);
  padding-bottom: var(--components-tag-padding-sm-y);
  padding-right: var(--components-tag-padding-sm-x);
  padding-left: var(--components-tag-padding-sm-x);

  &[data-has-suffix-icon="true"] {
    padding-right: var(--components-tag-padding-sm-r-icon);
  }

  &[data-has-prefix-icon="true"] {
    padding-left: var(--components-tag-padding-sm-l-icon);
  }
`;

const sizeMd = `
  padding-top: var(--components-tag-padding-md-y);
  padding-bottom: var(--components-tag-padding-md-y);
  padding-right: var(--components-tag-padding-md-x);
  padding-left: var(--components-tag-padding-md-x);

  &[data-has-suffix-icon="true"] {
    padding-right: var(--components-tag-padding-md-r-icon);
  }

  &[data-has-prefix-icon="true"] {
    padding-left: var(--components-tag-padding-md-l-icon);
  }
`;

export const ElTag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: var(--components-tag-gap);
  background-color: var(--components-tag-colors-bg);
  width: fit-content;
  color: var(--components-tag-colors-color);
  font-size: var(--components-tag-font-size);
  font-weight: var(--components-tag-font-weight-medium);
  line-height: var(--components-tag-line-height);
  border-radius: var(--components-tag-border-radius);

  &[data-is-uppercase="true"] {
    text-transform: uppercase;
  }

  &[data-has-bold-text="true"] {
    font-weight: var(--components-tag-font-weight-bold);
  }

  &[data-size="sm"] {
    ${sizeSm}
  }
  &[data-size="md"] {
    ${sizeMd}
  }
`;
