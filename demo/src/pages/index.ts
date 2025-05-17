import { lazy } from 'react';

export const Pages = {
  NotFound: lazy(() => import('./not-found')),

  Introduction: lazy(() => import('./introduction')),
  Installation: lazy(() => import('./installation')),

  Interface: lazy(() => import('./interface-page')),
  InterfaceDetail: lazy(() => import('./interface-detail-page')),
};
