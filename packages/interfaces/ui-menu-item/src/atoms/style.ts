import { styled } from '@linaria/react';

const layout = `
  display: flex;
  align-items: center;
`;

const base = `
  ${layout}
  gap: var(--components-menu-item-gap);
  flex-direction: row;
  justify-content: start;
  min-height: 44px;
  width: 100%;

  background-color: var(--components-menu-item-colors-default-bg);
  padding-left: var(--components-menu-item-padding-l);
  padding-right: var(--components-menu-item-padding-r);
  padding-top: var(--components-menu-item-padding-t);
  padding-bottom: var(--components-menu-item-padding-b);
  border-radius: var(--components-menu-item-border-radius);
  color: var(--components-menu-item-colors-default-color);
  transition: transform 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: color-mix(
      in srgb,
      var(--components-menu-item-colors-default-bg),
      var(--components-menu-item-colors-default-color) 10%
    );
  }

  &:focus-visible {
    outline: solid;
    outline-width: 4px;
    outline-color: var(--components-menu-item-colors-focus-outline);
  }

  &:active {
    transform: scale(0.975);
  }

  &[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 32%;
  }
`;

export const ElMenuItemLeadElement = styled.div`
  ${layout}
`;
export const ElMenuItemTrailElement = styled.div`
  ${layout}
  flex-grow: 1;
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const ElMenuItemLabel = styled.h3`
  font-size: var(--components-menu-item-font-size-label);
  line-height: var(--components-menu-item-line-height-label);
  font-weight: var(--components-menu-item-font-weight);
`;
export const ElMenuItemDescription = styled.p`
  font-size: var(--components-menu-item-font-size-description);
  line-height: var(--components-menu-item-line-height-description);
  font-weight: var(--components-menu-item-font-weight);
  color: var(--components-menu-item-colors-description-color);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ElMenuItemLinkButton = styled.button`
  ${base}
  outline: none;
  border: none;
  text-align: left;
`;

export const ElMenuItemLinkAnchor = styled.a`
  ${base}
`;
export const ElMenuItemContainer = styled.li`
  max-width: var(--components-menu-item-max-width);
  list-style: none;
`;
