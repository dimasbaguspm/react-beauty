import { css } from "@linaria/core";

const size = `
  &[data-size="2xs"] {
    width: var(--components-icon-size-placeholder-2xs);
    height: var(--components-icon-size-placeholder-2xs);
  }

  &[data-size="xs"] {
    width: var(--components-icon-size-placeholder-xs);
    height: var(--components-icon-size-placeholder-xs);
  }

  &[data-size="md"] {
    width: var(--components-icon-size-placeholder-md);
    height: var(--components-icon-size-placeholder-md);
  }

  &[data-size="lg"] {
    width: var(--components-icon-size-placeholder-lg);
    height: var(--components-icon-size-placeholder-lg);
  }
`;

export const elIcon = css`
  ${size}
`;
