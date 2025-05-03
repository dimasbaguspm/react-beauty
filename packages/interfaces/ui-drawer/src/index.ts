import {
  DrawerBody,
  DrawerContainer,
  DrawerHeader,
  DrawerDismissButton,
  DrawerFooter,
  DrawerTitle,
} from './atoms';

type DrawerCompositionModel = {
  Header: typeof DrawerHeader;
  Body: typeof DrawerBody;
  DismissButton: typeof DrawerDismissButton;
  Footer: typeof DrawerFooter;
  Title: typeof DrawerTitle;
};

const DrawerComposition = {
  Header: DrawerHeader,
  Body: DrawerBody,
  DismissButton: DrawerDismissButton,
  Footer: DrawerFooter,
  Title: DrawerTitle,
} satisfies DrawerCompositionModel;

export const Drawer = Object.assign(DrawerContainer, DrawerComposition);
