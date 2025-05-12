import { styled } from '@linaria/react';
import { MenuItemContainer } from '@react-beauty/ui-menu-item';

export const ElSidebarContainer = styled.div`
  z-index: var(--components-sidebar-z-index);
  position: relative;
  height: 100vh;
  background-color: var(--components-sidebar-background);
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--components-sidebar-border-color);
  box-shadow: var(--components-sidebar-shadow);
  transition: width var(--components-sidebar-transition-duration) 10ms;
  min-width: var(--components-sidebar-width-collapsed);

  &[data-expanded='true'] {
    min-width: var(--components-sidebar-width-expanded);
  }
`;

export const ElSidebarHeader = styled.div`
  height: var(--components-sidebar-header-height);
  padding: var(--components-sidebar-header-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--components-sidebar-border-color);

  &[data-expanded='false'] {
    justify-content: start;
    align-items: center;
  }
`;

export const ElSidebarBody = styled.div`
  flex: 1;
  padding: var(--components-sidebar-body-padding);
  display: flex;
  flex-direction: column;
  gap: var(--components-sidebar-body-gap);
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ElSidebarFooter = styled.div`
  padding: var(--components-sidebar-footer-padding);
  border-top: 1px solid var(--components-sidebar-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ElSidebarToggleButton = styled.button`
  position: absolute;
  top: 12.5px;
  right: -10px;
  background: var(--components-sidebar-toggle-button-background);
  outline: solid;
  outline-color: var(--components-sidebar-toggle-button-outline-color);
  outline-width: 1px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--components-sidebar-toggle-button-color);
  padding: 2px;
  border-radius: 999px;

  &:hover {
    background-color: var(--components-sidebar-toggle-button-background-hover);
    color: var(--components-sidebar-toggle-button-color-hover);
  }

  &:focus-visible {
    outline: solid;
    outline-width: 4px;
    outline-color: var(--components-sidebar-toggle-button-focus-ring);
  }
`;

export const ElSidebarDivider = styled.div`
  min-height: 1px;
  background-color: var(--components-sidebar-divider-color);
  margin: 8px 0;
`;

export const ElSidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--components-sidebar-section-gap);
  margin-bottom: var(--components-sidebar-section-margin-bottom);
`;

export const ElSidebarItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--components-sidebar-item-list-gap);
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ElSidebarSectionTitle = styled.h3`
  font-size: var(--components-sidebar-section-title-font-size);
  line-height: var(--components-sidebar-section-title-line-height);
  font-weight: var(--components-sidebar-section-title-font-weight);
  color: var(--components-sidebar-section-title-color);
  margin: 0 0 4px 0;
  overflow-y: hidden;

  [data-expanded='false'] & {
    display: none;
  }
`;

export const ElSidebarItemContainer = styled(MenuItemContainer)`
  width: 100%;

  background-color: var(--components-sidebar-item-background);
  color: var(--components-sidebar-item-color);
  border-radius: var(--components-sidebar-item-border-radius);
  transition:
    background-color var(--components-sidebar-transition-duration)
      var(--components-sidebar-transition-timing),
    color var(--components-sidebar-transition-duration)
      var(--components-sidebar-transition-timing);

  &[data-active='true'] {
    background-color: var(--components-sidebar-item-background-active);
    color: var(--components-sidebar-item-color-active);
  }

  &[data-expanded='false'] {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 0px;
    padding: 8px;
  }

  /* Label visibility based on sidebar expansion state */
  & [data-visible='false'] {
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  & [data-visible='true'] {
    opacity: 1;
    width: auto;
    transition: opacity var(--components-sidebar-transition-duration)
      var(--components-sidebar-transition-timing);
  }
`;
