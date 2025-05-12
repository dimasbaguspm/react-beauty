import { RouteObject } from 'react-router';

import { ROUTES } from '../../constants/routes';
import { Pages } from '../../pages';

export const INTERFACE_ROUTE: RouteObject[] = [
  {
    path: ROUTES.UI,
    children: [
      {
        index: true,
        Component: Pages.Interface,
      },
      {
        path: ROUTES.UI_DETAIL,
        Component: Pages.InterfaceDetail,
      },
    ],
  },
];
