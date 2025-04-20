import {
  MenuItemContainer,
  MenuItemLabel,
  MenuItemLeadElement,
  MenuItemTrailElement,
} from "./atoms";

type CompoundMenuItemProps = {
  Label: typeof MenuItemLabel;
  TrailElement: typeof MenuItemTrailElement;
  LeadElement: typeof MenuItemLeadElement;
};

const CompoundMenuItem = {
  Label: MenuItemLabel,
  TrailElement: MenuItemTrailElement,
  LeadElement: MenuItemLeadElement,
} satisfies CompoundMenuItemProps;

export const MenuItem = Object.assign(MenuItemContainer, CompoundMenuItem);
