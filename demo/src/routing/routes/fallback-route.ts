import { RouteObject } from 'react-router';

import { ROUTES } from '../../constants/routes';
import { Pages } from '../../pages';

export const FALLBACK_ROUTE: RouteObject[] = [
  {
    path: ROUTES.WILD,
    Component: Pages.NotFound,
  },
];
