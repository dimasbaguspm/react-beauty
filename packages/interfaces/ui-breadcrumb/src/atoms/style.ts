import { styled } from '@linaria/react';

export const ElBreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  max-width: var(--components-breadcrumb-max-width, 100%);
  width: 100%;
  font-family: var(--font-primary);
  padding: var(--components-breadcrumb-padding-y)
    var(--components-breadcrumb-padding-x);
`;

export const ElBreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: var(--components-breadcrumb-gap);
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ElBreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: var(--components-breadcrumb-gap);
  font-size: var(--components-breadcrumb-font-size);
  line-height: var(--components-breadcrumb-line-height);
  color: var(--components-breadcrumb-colors-default);
  font-weight: var(--components-breadcrumb-font-weight-default);
  max-width: 200px;
  min-width: 0;

  &[data-is-active='true'] {
    color: var(--components-breadcrumb-colors-active);
    font-weight: var(--components-breadcrumb-font-weight-active);
  }
`;

export const ElBreadcrumbLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in-out;
  outline: none;
  max-width: 100%;

  /* Core styles for ellipsis to work */
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  [data-is-active='true'] & {
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }

  &:hover {
    color: var(--components-breadcrumb-colors-hover);
  }

  &:focus-within {
    outline: solid;
    outline-width: 2px;
    outline-color: var(--components-breadcrumb-colors-focus-outline);
    border-radius: var(--components-breadcrumb-border-radius);
    z-index: 1;
    position: relative;
  }
`;

export const ElBreadcrumbDivider = styled.span`
  color: var(--components-breadcrumb-colors-divider);
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;
