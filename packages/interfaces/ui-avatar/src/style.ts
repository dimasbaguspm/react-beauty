import { styled } from "@linaria/react";

const placement = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const size = `
  &[data-size="2xl"] {
    width: var(--components-avatar-size-2xl);
    height: var(--components-avatar-size-2xl);
  }

  &[data-size="xl"] {
    width: var(--components-avatar-size-xl);
    height: var(--components-avatar-size-xl);
  }

  &[data-size="lg"] {
    width: var(--components-avatar-size-lg);
    height: var(--components-avatar-size-lg);
  }

  &[data-size="md"] {
    width: var(--components-avatar-size-md);
    height: var(--components-avatar-size-md);
  }

  &[data-size="sm"] {
    width: var(--components-avatar-size-sm);
    height: var(--components-avatar-size-sm);
  }

  &[data-size="xs"] {
    width: var(--components-avatar-size-xs);
    height: var(--components-avatar-size-xs);
  }
`;

const color = `
  background-color: var(--components-avatar-color-background-color);
  color: var(--components-avatar-color-color);
`;

const font = `
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);

  &[data-size="2xl"] {
    font-size: var(--components-avatar-font-2xl);
    line-height: var(--components-avatar-line-height-2xl);
  }

  &[data-size="xl"] {
    font-size: var(--components-avatar-font-xl);
    line-height: var(--components-avatar-line-height-xl);
  }

  &[data-size="lg"] {
    font-size: var(--components-avatar-font-lg);
    line-height: var(--components-avatar-line-height-lg);
  }

  &[data-size="md"] {
    font-size: var(--components-avatar-font-md);
    line-height: var(--components-avatar-line-height-md);
  }

  &[data-size="sm"] {
    font-size: var(--components-avatar-font-sm);
    line-height: var(--components-avatar-line-height-sm);
  }

  &[data-size="xs"] {
    font-size: var(--components-avatar-font-xs);
    line-height: var(--components-avatar-line-height-xs);
  }
`;

const borderRadius = `
  border-radius: var(--border-radius-rounded);
`;

const text = `
text-transform: uppercase;
`;

export const ElAvatarInitial = styled.div`
  ${text}
  ${placement}
  ${size}
  ${color}
  ${font}
  ${borderRadius}
`;

export const ElAvatarPicture = styled.img`
  ${text}
  ${placement}
  ${size}
  ${color}
  ${font}
  ${borderRadius}
  object-fit: cover;
`;
