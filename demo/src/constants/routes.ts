export const ROUTES = {
  INTRODUCTION: '/',
  INSTALLATION: 'installation',
  CHANGE_LOG: 'changelog',

  UI: 'ui',
  UI_DETAIL: ':uiSlug',

  UI_ACCORDION: 'accordion',
  UI_ALERT: 'alert',
  UI_BADGE: 'bottom-sheet',
  UI_BREADCRUMB: 'breadcrumb',
  UI_BUTTON: 'button',
  UI_CHECKBOX: 'checkbox',
  UI_DRAWER: 'drawer',
  UI_EMPTY_STATE: 'empty-state',
  UI_ICON: 'icon',
  UI_LOADER: 'loader',
  UI_MENU_ITEM: 'menu-item',
  UI_MODAL: 'modal',
  UI_PAGINATION: 'pagination',
  UI_RADIO: 'radio',
  UI_SELECT: 'select',
  UI_SIDEBAR: 'sidebar',
  UI_SWITCH: 'switch',
  UI_TAG: 'tag',
  UI_TEXT_AREA: 'text-area',
  UI_TEXT_INPUT: 'text-input',
  UI_TOOLTIP: 'tooltip',

  INTERFACES_DETAIL: ':interfaceSlug',

  WILD: '*',
} as const;

const constructUIRoute = (route: string) => {
  return ROUTES.INTRODUCTION + [ROUTES.UI, route].join('/');
};

const constructBaseRoute = (route: string) => {
  return ROUTES.INTRODUCTION + route;
};

export const DEEP_LINKING_ROUTES = {
  INTRODUCTION: ROUTES.INTRODUCTION,

  INSTALLATION: constructBaseRoute(ROUTES.INSTALLATION),
  CHANGE_LOG: constructBaseRoute(ROUTES.CHANGE_LOG),
  UI: constructBaseRoute(ROUTES.UI),

  UI_ACCORDION: constructUIRoute(ROUTES.UI_ACCORDION),
  UI_ALERT: constructUIRoute(ROUTES.UI_ALERT),
  UI_BADGE: constructUIRoute(ROUTES.UI_BADGE),
  UI_BREADCRUMB: constructUIRoute(ROUTES.UI_BREADCRUMB),
  UI_BUTTON: constructUIRoute(ROUTES.UI_BUTTON),
  UI_CHECKBOX: constructUIRoute(ROUTES.UI_CHECKBOX),
  UI_DRAWER: constructUIRoute(ROUTES.UI_DRAWER),
  UI_EMPTY_STATE: constructUIRoute(ROUTES.UI_EMPTY_STATE),
  UI_ICON: constructUIRoute(ROUTES.UI_ICON),
  UI_LOADER: constructUIRoute(ROUTES.UI_LOADER),
  UI_MENU_ITEM: constructUIRoute(ROUTES.UI_MENU_ITEM),
  UI_MODAL: constructUIRoute(ROUTES.UI_MODAL),
  UI_PAGINATION: constructUIRoute(ROUTES.UI_PAGINATION),
  UI_RADIO: constructUIRoute(ROUTES.UI_RADIO),
  UI_SELECT: constructUIRoute(ROUTES.UI_SELECT),
  UI_SIDEBAR: constructUIRoute(ROUTES.UI_SIDEBAR),
  UI_SWITCH: constructUIRoute(ROUTES.UI_SWITCH),
  UI_TAG: constructUIRoute(ROUTES.UI_TAG),
  UI_TEXT_AREA: constructUIRoute(ROUTES.UI_TEXT_AREA),
  UI_TEXT_INPUT: constructUIRoute(ROUTES.UI_TEXT_INPUT),
  UI_TOOLTIP: constructUIRoute(ROUTES.UI_TOOLTIP),
} as const;
