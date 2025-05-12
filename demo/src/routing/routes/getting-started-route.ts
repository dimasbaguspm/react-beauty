import { RouteObject } from 'react-router';

import { ROUTES } from '../../constants/routes';
import { Pages } from '../../pages';

export const GETTING_STARTED_ROUTE: RouteObject[] = [
  {
    index: true,
    Component: Pages.Introduction,
  },
  {
    path: ROUTES.INSTALLATION,
    Component: Pages.Installation,
  },
];
