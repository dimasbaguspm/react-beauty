import {
  TabsContainer,
  TabsList,
  TabItem,
  TabItemLead,
  TabItemLabel,
  TabItemTrail,
} from './atoms';

type TabsCompositionModel = {
  List: typeof TabsList;
  Item: typeof TabItem;
  ItemLead: typeof TabItemLead;
  ItemLabel: typeof TabItemLabel;
  ItemTrail: typeof TabItemTrail;
};

const TabsComposition = {
  List: TabsList,
  Item: TabItem,
  ItemLead: TabItemLead,
  ItemLabel: TabItemLabel,
  ItemTrail: TabItemTrail,
} satisfies TabsCompositionModel;

export const Tabs = Object.assign(TabsContainer, TabsComposition);

export type { TabsType } from './atoms/use-tabs';
