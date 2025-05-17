import { DEEP_LINKING_ROUTES } from '../../constants/routes';

interface PageLayoutDataModel {
  pageId: string;
  title: string;
}

const gettingStarted: PageLayoutDataModel[] = [
  {
    pageId: DEEP_LINKING_ROUTES.INTRODUCTION,
    title: 'Introduction',
  },
  {
    pageId: DEEP_LINKING_ROUTES.INSTALLATION,
    title: 'Installation',
  },
];

const interfacePage: PageLayoutDataModel[] = [
  {
    pageId: DEEP_LINKING_ROUTES.UI,
    title: 'Modules',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_ACCORDION,
    title: 'Accordion',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_AVATAR,
    title: 'Avatar',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_ALERT,
    title: 'Alert',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_BOTTOM_SHEET,
    title: 'Bottom Sheet',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_BREADCRUMB,
    title: 'Breadcrumb',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_BUTTON,
    title: 'Button',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_CHECKBOX,
    title: 'Checkbox',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_DRAWER,
    title: 'Drawer',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_EMPTY_STATE,
    title: 'Empty State',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_ICON,
    title: 'Icon',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_LOADER,
    title: 'Loader',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_MENU_ITEM,
    title: 'Menu Item',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_MODAL,
    title: 'Modal',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_PAGINATION,
    title: 'Pagination',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_RADIO,
    title: 'Radio',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_SELECT,
    title: 'Select',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_SIDEBAR,
    title: 'Sidebar',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_SWITCH,
    title: 'Switch',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_TAG,
    title: 'Tag',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_TEXT_AREA,
    title: 'Text Area',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_TEXT_INPUT,
    title: 'Text Input',
  },
  {
    pageId: DEEP_LINKING_ROUTES.UI_TOOLTIP,
    title: 'Tooltip',
  },
];

export const pageLayoutData: [string, PageLayoutDataModel[]][] = [
  ['gettingStarted', gettingStarted],
  ['interfaces', interfacePage],
];
