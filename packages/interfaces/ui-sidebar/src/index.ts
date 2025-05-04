import {
  SidebarBody,
  SidebarContainer,
  SidebarDivider,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarItemList,
  SidebarSection,
  SidebarSectionTitle,
  SidebarToggleButton,
} from './atoms';

type SidebarCompositionModel = {
  Header: typeof SidebarHeader;
  Body: typeof SidebarBody;
  Footer: typeof SidebarFooter;
  Item: typeof SidebarItem;
  ItemList: typeof SidebarItemList;
  ToggleButton: typeof SidebarToggleButton;
  Divider: typeof SidebarDivider;
  Section: typeof SidebarSection;
  SectionTitle: typeof SidebarSectionTitle;
};

const SidebarComposition = {
  Header: SidebarHeader,
  Body: SidebarBody,
  Footer: SidebarFooter,
  Item: SidebarItem,
  ItemList: SidebarItemList,
  ToggleButton: SidebarToggleButton,
  Divider: SidebarDivider,
  Section: SidebarSection,
  SectionTitle: SidebarSectionTitle,
} satisfies SidebarCompositionModel;

export const Sidebar = Object.assign(SidebarContainer, SidebarComposition);
